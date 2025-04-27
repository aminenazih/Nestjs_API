// src/posts/dto/update-post.dto.ts
import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdatePostDto {
  @IsString()
  @IsOptional()
  @MinLength(5)
  title?: string;

  @IsString()
  @IsOptional()
  @MinLength(10)
  content?: string;
}