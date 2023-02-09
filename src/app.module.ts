import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AuthorModule } from './modules/author/author.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AuthorModule, MikroOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
