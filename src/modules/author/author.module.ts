import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class AppModule {}
