import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { Author } from './author.entity';
import { AuthorService } from './author.service';

@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get('/with-book-comments-by-user/:uuid')
  @HttpCode(HttpStatus.OK)
  async findAllWithBookCommentsByUser(
    @Param('uuid') uuid: string,
  ): Promise<Author[]> {
    return this.authorService.findAllWithRelations(uuid);
  }
}
