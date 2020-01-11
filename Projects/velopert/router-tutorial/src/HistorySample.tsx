import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
type gf = {
  name: string;
  age: number;
};

export default function HistorySample({ history }: RouteComponentProps) {
  function handleGoBack() {
    history.goBack();
  }

  function handleGoHome() {
    history.push("/");
  }

  //   useEffect(() => {
  //     return () => {
  //       history.block("정말 떠나실 건가요?");
  //     };
  //   }, []);

  return (
    <div>
      <button onClick={handleGoBack}>뒤로</button>
      <button onClick={handleGoHome}>홈으로</button>
    </div>
  );
}
