import React, { useState, useMemo, useCallback, useRef } from "react";

function getAverage(numbers: Array<number>) {
  console.log("평균 계산 중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
}

export default function Average() {
  const [list, setList] = useState([] as number[]);
  const [_number, setNumber] = useState("");
  const inputEl = useRef((null as unknown) as HTMLInputElement);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(
    (e: React.MouseEvent) => {
      const nextList = list.concat(parseInt(_number));
      setList(nextList);
      setNumber("");
      inputEl.current.focus();
    },
    [_number, list]
  );

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={_number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value: number, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
}
