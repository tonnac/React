import React, { useReducer } from "react";

type State = {
  name: string;
  nickName: string;
};

function reducer(state: State, action: EventTarget & HTMLInputElement) {
  return {
    ...state,
    [action.className]: action.value
  };
}

function Info() {
  const [state, dispatch] = useReducer(reducer, { name: "", nickName: "" });

  const { name, nickName } = state;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input className="name" value={name} onChange={onChange} />
        <input className="nickName" value={nickName} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름 :</b> {name}
        </div>
        <div>
          <b>닉네임 :</b> {nickName}
        </div>
      </div>
    </div>
  );
}

export default Info;
