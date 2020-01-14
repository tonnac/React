import React from "react";
import TodoListItem from "./TodoListItem";
import { TodoProp } from "../App";
import "./TodoList.scss";

export default function TodoList(props: {
  todos: TodoProp[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}) {
  const { todos, onRemove, onToggle } = props;
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
