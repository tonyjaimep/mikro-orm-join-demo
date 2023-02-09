import { EntityRepository } from '@mikro-orm/postgresql';
import { BookTemplate } from './book-template.entity';

export class BookTemplateRepository extends EntityRepository<BookTemplate> {}
