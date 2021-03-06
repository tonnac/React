import React from "react";
import useInputs from "./useInputs";

function Info() {
  const [state, onChange] = useInputs({ name: "", nickName: "" });
  const { name, nickName } = state;

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
