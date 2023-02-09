import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { BookTemplate } from 'modules/book-template/book-template.entity';
import { Book } from 'modules/book/book.entity';
import { Comment } from 'modules/comment/comment.entity';
import { AuthorController } from './author.controller';
import { Author } from './author.entity';
import { AuthorService } from './author.service';

@Module({
  imports: [MikroOrmModule.forFeature([Author, Book, BookTemplate, Comment])],
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class AuthorModule {}
