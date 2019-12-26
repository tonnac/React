import React from "react";

function Tablehead({ callback }) {
  return (
    <thead>
      <tr>
        <th>
          <button onClick={() => callback("number")}>번호</button>
        </th>
        <th>
          <button onClick={() => callback("title")}>제목</button>
        </th>
        <th>
          <button onClick={() => callback("date")}>날짜</button>
        </th>
      </tr>
    </thead>
  );
}

export default Tablehead;
