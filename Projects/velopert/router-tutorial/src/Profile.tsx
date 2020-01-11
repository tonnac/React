import React from "react";
import { RouteComponentProps } from "react-router-dom";
import WithRouterSample from "./WithRouterSample";

interface MatchParams {
  username: string;
}

type dataValue = {
  name: string;
  description: string;
};

const data: { [key: string]: dataValue } = {
  velopert: {
    name: "김민준",
    description: "리액트를 좋아하는 개발자"
  },
  gildong: {
    name: "홍길동",
    description: "고전 소설 홍길동전의 주인공"
  }
};

export default function Profile({ match }: RouteComponentProps<MatchParams>) {
  console.log(match);

  const username = match.params.username;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
}
