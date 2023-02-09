import { EntityRepository } from '@mikro-orm/postgresql';
import { Author } from './author.entity';

export class AuthorRepository extends EntityRepository<Author> {}
