import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [UsersModule, CommentsModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
