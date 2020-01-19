import React from "react";
import styled from "styled-components";
import NewsItem, { Article_ as Atc } from "./NewsItem";
import usePromise from "../lib/usePromise";
import axios from "axios";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export default function NewsList(props: { category: string }) {
  const { category } = props;
  const [loading, response, error] = usePromise(() => {
    const query = category === "all" ? "" : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b4b211ec6a8246feb2b6ebb69e4890be`
    );
  }, [category]);

  if (loading) {
    return <NewsListBlock>대기 중</NewsListBlock>;
  }

  if (response === null) {
    return null;
  }

  if (error) {
    return <NewsListBlock>에러 발생</NewsListBlock>;
  }

  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map((article: Atc) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
}
