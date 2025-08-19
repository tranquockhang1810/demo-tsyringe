"use client";
import React from "react";
import { useTodoViewModel } from "../viewmodel/TodoViewmodel";

export default function TodoView() {
  const { todos, loading } = useTodoViewModel();

  if (loading) return <div>Loading...</div>;

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
