import { EntityManager } from '@mikro-orm/postgresql';
import { Seeder } from '@mikro-orm/seeder';
import { Author } from '../../modules/author/author.entity';
import { Book } from '../../modules/book/book.entity';
import { BookTemplate } from '../../modules/book-template/book-template.entity';
import { Comment } from '../../modules/comment/comment.entity';

const TEST_USER_UUID = '88888888-8888-8888-8888-888888888888';

class AuthorSeeder extends Seeder {
  static uuid1 = '00000000-0000-0000-0000-000000000000';
  static uuid2 = '11111111-1111-1111-1111-111111111111';

  async run(em: EntityManager) {
    em.create(Author, {
      uuid: AuthorSeeder.uuid1,
      name: 'Test Author 1',
    });
    em.create(Author, {
      uuid: AuthorSeeder.uuid2,
      name: 'Test Author 2',
    });
    await em.flush();
  }
}

class BookTemplateSeeder extends Seeder {
  static uuid1 = '22222222-2222-2222-2222-222222222222';
  static uuid2 = '33333333-3333-3333-3333-333333333333';

  async run(em: EntityManager) {
    em.create(BookTemplate, {
      uuid: BookTemplateSeeder.uuid1,
      foo: 'Test Book Template 1',
    });
    em.create(BookTemplate, {
      uuid: BookTemplateSeeder.uuid2,
      foo: 'Test Book Template 2',
    });
    await em.flush();
  }
}

class BookSeeder extends Seeder {
  static uuid1 = '44444444-4444-4444-4444-444444444444';
  static uuid2 = '55555555-5555-5555-5555-555555555555';

  async run(em: EntityManager) {
    em.create(Book, {
      uuid: BookSeeder.uuid1,
      author: AuthorSeeder.uuid1,
      template: BookTemplateSeeder.uuid1,
      title: 'Test Book 1',
    });
    em.create(Book, {
      uuid: BookSeeder.uuid2,
      author: AuthorSeeder.uuid2,
      template: BookTemplateSeeder.uuid2,
      title: 'Test Book 2',
    });
    await em.flush();
  }
}

class CommentSeeder extends Seeder {
  static uuid1 = '66666666-6666-6666-6666-666666666666';
  static uuid2 = '77777777-7777-7777-7777-777777777777';

  async run(em: EntityManager) {
    em.create(Comment, {
      userUuid: TEST_USER_UUID,
      book: BookSeeder.uuid1,
      message: 'Test comment 1',
    });
    em.create(Comment, {
      userUuid: TEST_USER_UUID,
      book: BookSeeder.uuid1,
      message: 'Test comment 2',
    });
    em.create(Comment, {
      userUuid: TEST_USER_UUID,
      book: BookSeeder.uuid2,
      message: 'Test comment 3',
    });
    em.create(Comment, {
      userUuid: TEST_USER_UUID,
      book: BookSeeder.uuid2,
      message: 'Test comment 4',
    });
    await em.flush();
  }
}

export class DatabaseSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    return this.call(em, [
      AuthorSeeder,
      BookTemplateSeeder,
      BookSeeder,
      CommentSeeder,
    ]);
  }
}
