import React, { useState, useCallback, ChangeEvent } from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";

export default function TodoInsert(props: {
  onInsert: (text: string) => void;
}) {
  const { onInsert } = props;
  const [value, setValue] = useState("");
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue("");

      e.preventDefault();
    },
    [onInsert, value]
  );

  const onClick = useCallback(() => {
    onInsert(value);
    setValue("");
  }, [onInsert, value]);

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        value={value}
        onChange={onChange}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
}
