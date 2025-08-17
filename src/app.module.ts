import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { PingController } from './ping/ping.controller';

@Module({
  imports: [TasksModule],
  controllers: [PingController],
})
export class AppModule {}
