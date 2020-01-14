import React from "react";
import "./TodoTemplate.scss";

export default function TodoTemplate(props: any) {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{props.children}</div>
    </div>
  );
}
