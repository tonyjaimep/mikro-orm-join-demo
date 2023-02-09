import { Migration } from '@mikro-orm/migrations';

export class Migration20230209182644 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "Author" ("uuid" uuid not null, "name" varchar(255) not null, constraint "Author_pkey" primary key ("uuid"));');

    this.addSql('create table "BookTemplate" ("uuid" uuid not null, "foo" varchar(255) not null, constraint "BookTemplate_pkey" primary key ("uuid"));');

    this.addSql('create table "Book" ("uuid" uuid not null, "title" varchar(255) not null, "author" uuid not null, "template" uuid not null, constraint "Book_pkey" primary key ("uuid"));');

    this.addSql('create table "Comment" ("uuid" uuid not null, "userUuid" uuid not null, "book" uuid not null, "message" varchar(255) not null, constraint "Comment_pkey" primary key ("uuid"));');

    this.addSql('alter table "Book" add constraint "Book_author_foreign" foreign key ("author") references "Author" ("uuid") on update cascade;');
    this.addSql('alter table "Book" add constraint "Book_template_foreign" foreign key ("template") references "BookTemplate" ("uuid") on update cascade;');

    this.addSql('alter table "Comment" add constraint "Comment_book_foreign" foreign key ("book") references "Book" ("uuid") on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "Book" drop constraint "Book_author_foreign";');

    this.addSql('alter table "Book" drop constraint "Book_template_foreign";');

    this.addSql('alter table "Comment" drop constraint "Comment_book_foreign";');

    this.addSql('drop table if exists "Author" cascade;');

    this.addSql('drop table if exists "BookTemplate" cascade;');

    this.addSql('drop table if exists "Book" cascade;');

    this.addSql('drop table if exists "Comment" cascade;');
  }

}
