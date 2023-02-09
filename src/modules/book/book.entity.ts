import {
  Collection,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryKey,
  Property,
  UuidType,
} from '@mikro-orm/core';
import { v4 } from 'uuid';
import { Author } from '../author/author.entity';
import { BookTemplate } from '../book-template/book-template.entity';
import { Comment } from '../comment/comment.entity';
import { BookRepository } from './book.repository';

@Entity({ customRepository: () => BookRepository })
export class Book {
  @PrimaryKey({ type: UuidType })
  uuid = v4();

  @Property()
  title: string;

  @ManyToOne()
  author: Author;

  @ManyToOne()
  template: BookTemplate;

  @OneToMany(() => Comment, (comment) => comment.book)
  comments = new Collection<Comment>(this);
}
