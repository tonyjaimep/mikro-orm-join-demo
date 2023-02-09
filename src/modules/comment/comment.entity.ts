import {
  Entity,
  ManyToOne,
  PrimaryKey,
  Property,
  UuidType,
} from '@mikro-orm/core';
import { v4 } from 'uuid';
import { Book } from '../book/book.entity';
import { CommentRepository } from './comment.repository';

@Entity({ customRepository: () => CommentRepository })
export class Comment {
  @PrimaryKey({ type: UuidType })
  uuid = v4();

  @Property({ type: UuidType })
  userUuid: UuidType;

  @ManyToOne()
  book: Book;

  @Property()
  message: string;
}
