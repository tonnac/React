import React, { useReducer, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

export type TodoProp = {
  id: number;
  text: string;
  checked: boolean;
};

export type TodoProps = {
  todos: TodoProp[];
};
type Action = {
  type: string;
  todo: TodoProp | number;
};

function createBulkTodos(): TodoProp[] {
  const array: TodoProp[] = [];
  for (let i = 1; i <= 2500; ++i) {
    array.push({ id: i, text: `할 일 ${i}`, checked: false });
  }
  return array;
}

function todoReducer(todos: TodoProp[], action: Action) {
  switch (action.type) {
    case "INSERT":
      if (typeof action.todo === "object") return todos.concat(action.todo);
      else {
        break;
      }
    case "REMOVE":
      return todos.filter(todo => todo.id !== action.todo);
    case "TOGGLE":
      return todos.map(todo =>
        todo.id === action.todo ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return todos;
  }
}

const App: React.FC = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  const nextId = useRef(4);

  const onInsert = useCallback((text: string) => {
    const todo: TodoProp = {
      id: nextId.current,
      text,
      checked: false
    };
    dispatch({ type: "INSERT", todo });
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id: number) => {
    dispatch({ type: "REMOVE", todo: id });
  }, []);

  const onToggle = useCallback((id: number): void => {
    dispatch({ type: "TOGGLE", todo: id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
