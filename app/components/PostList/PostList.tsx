import { Card, Container } from "@mui/material";
import React from "react";
import Post from "../Post/Post";

export interface exPost {
  title: string;
  sub: string;
  date: string;
  tags: string[];
}

const exList: exPost[] = [
  {
    title: "1번 제목",
    sub: "1번 소제목",
    date: "23.12.12",
    tags: ["자바스크립트"],
  },
  {
    title: "2번 제목",
    sub: "2번 소제목",
    date: "23.12.13",
    tags: ["리액트"],
  },
  {
    title: "2번 제목",
    sub: "2번 소제목",
    date: "23.12.13",
    tags: ["리액트"],
  },
  {
    title: "2번 제목",
    sub: "2번 소제목",
    date: "23.12.13",
    tags: ["리액트"],
  },
  {
    title: "2번 제목",
    sub: "2번 소제목",
    date: "23.12.13",
    tags: ["리액트"],
  },
  {
    title: "2번 제목",
    sub: "2번 소제목",
    date: "23.12.13",
    tags: ["리액트"],
  },
  {
    title: "2번 제목",
    sub: "2번 소제목",
    date: "23.12.13",
    tags: ["리액트"],
  },
  {
    title: "2번 제목",
    sub: "2번 소제목",
    date: "23.12.13",
    tags: ["리액트"],
  },
  {
    title: "2번 제목",
    sub: "2번 소제목",
    date: "23.12.13",
    tags: ["리액트"],
  },
  {
    title: "2번 제목",
    sub: "2번 소제목",
    date: "23.12.13",
    tags: ["리액트"],
  },
  {
    title: "2번 제목",
    sub: "2번 소제목",
    date: "23.12.13",
    tags: ["리액트"],
  },
  {
    title: "2번 제목",
    sub: "2번 소제목",
    date: "23.12.13",
    tags: ["리액트"],
  },
];

const PostList = () => {
  return (
    <Container
      sx={{
        paddingTop: 3,
        gap: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {exList.map((v) => (
        <Post exPost={v} />
      ))}
    </Container>
  );
};

export default PostList;
