import { useEffect, useState } from "react";
import { container } from "@/DependenciesInjection";
import { ITodoRepository } from "../../../../api/features/todo/repositories/TodoRepository";
import { TodoResponseModel } from "../../../../api/features/todo/models/TodoResponseModel";

export function useTodoViewModel() {
  const repo = container.resolve<ITodoRepository>("ITodoRepository");

  const [todos, setTodos] = useState<TodoResponseModel[]>([]);
  const [loading, setLoading] = useState(false);

  const getTodoList = async () => {
    setLoading(true);
    const todoList = await repo.getTodos();
    setTodos(todoList);
    setLoading(false);
  };

  useEffect(() => {
    getTodoList();
  }, []);

  return { todos, loading };
}
