import { EntityRepository } from '@mikro-orm/postgresql';
import { Comment } from './comment.entity';

export class CommentRepository extends EntityRepository<Comment> {}
