import { Module } from '@nestjs/common';
import { BoardsController } from './boards/boards.controller';
import { BoardsService } from './boards/boards.service';

@Module({
  controllers: [BoardsController],
  providers: [BoardsService]
})
export class AppModule {}
