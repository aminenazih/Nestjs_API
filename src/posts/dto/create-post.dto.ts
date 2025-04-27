// src/posts/dto/create-post.dto.ts
import { IsNotEmpty, IsMongoId, IsString, MinLength } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  title: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  content: string;

  @IsMongoId()
  @IsNotEmpty()
  author: string;
}