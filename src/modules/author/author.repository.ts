import { EntityRepository } from '@mikro-orm/postgresql';
import { Author } from './author.entity';

export class AuthorRepository extends EntityRepository<Author> {
  async findAllWithRelations(userUuid: string): Promise<Author[]> {
    return this.qb()
      .select('*')
      .joinAndSelect('books', 'b')
      .joinAndSelect('b.template', 'bt')
      .leftJoinAndSelect('b.comments', 'bc', {
        'bc.userUuid': userUuid,
      });
  }
}
