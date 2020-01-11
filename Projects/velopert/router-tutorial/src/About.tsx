import React from "react";
import qs from "qs";
import { RouteComponentProps } from "react-router-dom";

type d = {
  name: string;
};

export default function About({ location }: RouteComponentProps) {
  console.log(location);
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  console.log(query);
  const showDetail = query.detail === "true";
  const gDetail = parseInt(query.anot) === 3;
  console.log(gDetail);
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      {showDetail && <p> detail 값을 true로 설정하셨군요!</p>}
    </div>
  );
}
