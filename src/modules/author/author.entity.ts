import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
  UuidType,
} from '@mikro-orm/core';
import { v4 } from 'uuid';
import { Book } from '../book/book.entity';
import { AuthorRepository } from './author.repository';

@Entity({ customRepository: () => AuthorRepository })
export class Author {
  @PrimaryKey({ type: UuidType })
  uuid = v4();

  @Property()
  name: string;

  @OneToMany(() => Book, (book) => book.author)
  books = new Collection<Book>(this);
}
