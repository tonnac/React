import React from "react";

type TodoItemProps = {
  todo?: string;
  onToggle?: () => void;
  onRemove?: () => void;
};

type TodosProps = {
  input?: string;
  todos?: object;
  onChangeInput?: (e: React.FormEvent<HTMLFormElement>) => void;
  onInsert?: (e: React.FormEvent<HTMLFormElement>) => void;
  onToggle?: (e: React.FormEvent<HTMLFormElement>) => void;
  onRemove?: (e: React.FormEvent<HTMLFormElement>) => void;
};

function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
  return (
    <div>
      <input type="checkbox" />
      <span>예제 텍스트</span>
      <button>삭제</button>
    </div>
  );
}
function Todos({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove
}: TodosProps) {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input />
        <button type="submit">등록</button>
      </form>
      <div>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
}

export default Todos;
