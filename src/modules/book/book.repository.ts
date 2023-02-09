import { EntityRepository } from '@mikro-orm/postgresql';
import { Book } from './book.entity';

export class BookRepository extends EntityRepository<Book> {}
