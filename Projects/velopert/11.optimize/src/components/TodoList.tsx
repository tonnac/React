import React from "react";
import TodoListItem from "./TodoListItem";
import { TodoProp } from "../App";
import "./TodoList.scss";

function TodoList(props: {
  todos: TodoProp[] | undefined;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}) {
  const { todos, onRemove, onToggle } = props;
  return (
    <>
      {todos ? (
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
      ) : null}
    </>
  );
}

export default React.memo(TodoList);
