import { Controller, Get, Query } from '@nestjs/common';
import { Author } from './author.entity';
import { AuthorService } from './author.service';

@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get('with-book-comments-by-user/:uuid')
  async findAllWithBookCommentsByUser(
    @Query() { uuid }: { uuid: string },
  ): Promise<Author[]> {
    return this.authorService.findAllWithRelations(uuid);
  }
}
