// src/posts/posts.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const createdPost = new this.postModel(createPostDto);
    return createdPost.save();
  }

  async findAll(): Promise<Post[]> {
    return this.postModel.find().populate('author', 'name email').exec();
  }

  async findOne(id: string): Promise<Post> {
    const post = await this.postModel.findById(id).populate('author', 'name email').exec();
    if (!post) throw new NotFoundException(`Post with ID ${id} not found`);
    return post;
  }

  async findByAuthor(authorId: string): Promise<Post[]> {
    return this.postModel.find({ author: authorId }).populate('author', 'name email').exec();
  }

  async update(id: string, updatePostDto: UpdatePostDto): Promise<Post> {
    const updatedPost = await this.postModel.findByIdAndUpdate(id, updatePostDto, { new: true }).exec();
    if (!updatedPost) throw new NotFoundException(`Post with ID ${id} not found`);
    return updatedPost;
  }

  async remove(id: string): Promise<Post> {
    const deletedPost = await this.postModel.findByIdAndDelete(id).exec();
    if (!deletedPost) throw new NotFoundException(`Post with ID ${id} not found`);
    return deletedPost;
  }
}