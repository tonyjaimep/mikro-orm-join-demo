import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  // get all authors with
  // - author's books
  // - author's book's templates
  // - author's book's comments from this user
  findAllWithRelations(userUuid: string) {
    return this.authorRepository.findAllWithRelations(userUuid);
  }
}
