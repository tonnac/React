import React from "react";
import Categories from "../Components/Categories";
import NewsList from "../Components/NewsList";
import { useParams } from "react-router-dom";

type matchParam = {
  category: string;
};

export default function NewsPage(props: any) {
  const param = useParams<matchParam>();
  const category = param.category || "all";
  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
}
