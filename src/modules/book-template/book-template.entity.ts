import { Entity, PrimaryKey, Property, UuidType } from '@mikro-orm/core';
import { v4 } from 'uuid';
import { BookTemplateRepository } from './book-template.repository';

@Entity({ customRepository: () => BookTemplateRepository })
export class BookTemplate {
  @PrimaryKey({ type: UuidType })
  uuid = v4();

  @Property()
  foo: string;
}
