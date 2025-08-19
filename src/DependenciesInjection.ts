import "reflect-metadata";
import { container } from "tsyringe";
import { ITodoRepository, TodoRepositoryImpl } from './api/features/todo/repositories/TodoRepository';

container.register<ITodoRepository>("ITodoRepository", {
  useClass: TodoRepositoryImpl,
});

export { container };
