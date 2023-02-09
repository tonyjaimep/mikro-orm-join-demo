import { Injectable } from '@nestjs/common';
import { Author } from './author.entity';
import { AuthorRepository } from './author.repository';

@Injectable()
export class AuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  // get all authors with
  // - author's books
  // - author's book's templates
  // - author's book's comments from this user
  async findAllWithRelations(userUuid: string): Promise<Author[]> {
    return this.authorRepository.findAllWithRelations(userUuid);
  }
}
