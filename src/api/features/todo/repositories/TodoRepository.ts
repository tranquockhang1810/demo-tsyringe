import { TodoResponseModel } from "../models/TodoResponseModel";
import { injectable } from "tsyringe";

export interface ITodoRepository {
  getTodos(): Promise<TodoResponseModel[]>;
  addTodo(title: string): Promise<TodoResponseModel>;
}

@injectable()
export class TodoRepositoryImpl implements ITodoRepository {
  private todos: TodoResponseModel[] = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
  ];

  async getTodos(): Promise<TodoResponseModel[]> {
    // Implementation
    return new Promise(resolve => setTimeout(() => resolve(this.todos), 500));
  }

  async addTodo(title: string): Promise<TodoResponseModel> {
    // Implementation
    const newTodo: TodoResponseModel = { id: Date.now(), title, completed: false };
    this.todos.push(newTodo);
    return newTodo;
  }
}

export const defaultTodoRepository = new TodoRepositoryImpl();
