import { Injectable } from '@nestjs/common';

type Task = {
  id: number;
  title: string;
  description?: string;
  done: boolean;
};

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  private nextId = 1;

  create(data: any): Task {
    const task: Task = {
      id: this.nextId++,
      title: String(data?.title ?? 'Sem título'),
      description: data?.description ? String(data.description) : undefined,
      done: Boolean(data?.done ?? false),
    };
    this.tasks.push(task);
    return task;
  }

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: number): Task | undefined {
    return this.tasks.find((t) => t.id === id);
  }

  update(id: number, data: any): Task | undefined {
    const i = this.tasks.findIndex((t) => t.id === id);
    if (i === -1) return undefined;
    const old = this.tasks[i];
    const updated: Task = {
      ...old,
      ...(data?.title !== undefined ? { title: String(data.title) } : {}),
      ...(data?.description !== undefined ? { description: String(data.description) } : {}),
      ...(data?.done !== undefined ? { done: Boolean(data.done) } : {}),
    };
    this.tasks[i] = updated;
    return updated;
  }

  remove(id: number): boolean {
    const before = this.tasks.length;
    this.tasks = this.tasks.filter((t) => t.id !== id);
    return this.tasks.length < before;
  }
}
