import React, { useState, useEffect } from "react";

function Info() {
  const [name, setName] = useState("");
  const [nickName, setNickname] = useState("");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  useEffect(() => {
    console.log("렌더링 완료");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  });
  useEffect(() => {
    console.log("마운트 될때만 실행");
    return () => {
      console.log("언마운트 될때만 실행");
    };
  }, []);
  useEffect(() => {
    console.log("이름 바뀔때만");
  }, [name]);
  useEffect(() => {
    console.log("닉네임 바뀔때만");
  }, [nickName]);
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickName} onChange={onChangeNickname} />
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
