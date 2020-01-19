import React, { useCallback } from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import * as todos from "../modules/todos";
import Todos from "../components/Todos";
import { useActions } from "../lib/useActions";

const { changeInput, insert, toggle, remove } = todos;

export default () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos
  }));
  //   const dispatch = useDispatch();
  //   const onChangeInput = useCallback(input => dispatch(changeInput(input)), [
  //     dispatch
  //   ]);
  //   const onInsert = useCallback(text => dispatch(insert(text)), [dispatch]);
  //   const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch]);
  //   const onRemove = useCallback(id => dispatch(remove(id)), [dispatch]);

  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    []
  );

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};
// const TodosContainer = ({
//   input,
//   todos,
//   changeInput,
//   insert,
//   toggle,
//   remove
// }) => (
//   <Todos
//     input={input}
//     todos={todos}
//     onChangeInput={changeInput}
//     onInsert={insert}
//     onToggle={toggle}
//     onRemove={remove}
//   />
// );

// export default connect(
//   ({ todos }) => ({
//     input: todos.input,
//     todos: todos.todos
//   }),
//   {
//     changeInput,
//     insert,
//     toggle,
//     remove
//   }
// )(TodosContainer);
