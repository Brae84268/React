import React from "react";
import Comment from "./Comment";
const comments = [
  {
    name: "김동현",
    comment: "안녕하세요 브래입니다.",
  },
  {
    name: "김동욱",
    comment: "리액트 재미있나..?",
  },
  {
    name: "김민경",
    comment: "나 사실 리액트 배워보고 싶을지도?",
  },
  {
    name: "호리",
    comment: "어이어이 건들지 말라구 젠장...",
  },
  {
    name: "아이쇼스피드",
    comment: "암 가나 고잉 홈 브로.",
  },
  {
    name: "???",
    comment: "일찍 일어나는 새가 피곤하다",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
