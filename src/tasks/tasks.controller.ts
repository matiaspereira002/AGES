import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasks: TasksService) {}

  @Post()
  create(@Body() body: any) {
    return this.tasks.create(body);
  }

  @Get()
  findAll() {
    return this.tasks.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const task = this.tasks.findOne(Number(id));
    if (!task) return { error: 'Task not found' };
    return task;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    const updated = this.tasks.update(Number(id), body);
    if (!updated) return { error: 'Task not found' };
    return updated;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const ok = this.tasks.remove(Number(id));
    return ok ? { deleted: true } : { error: 'Task not found' };
  }
}
