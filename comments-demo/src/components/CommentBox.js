import React, { useState, useEffect } from "react";

import CommentList from './CommentList'
import CommentForm from './CommentForm'

const CommentBox = (quiz) => {
  let comments = quiz.comments;
  const submitComment = (newComment) => {
    quiz.comments = comments.concat([newComment]);
    axios.post('https://interviewprepapp.azurewebsites.net/api/quiz/' + quiz.id, quiz, {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': "*",
      Authorization: 'Bearer ' + localStorage.getItem('token')
    })
    .then(res => console.log(res.data));
  }

  return (
    <div className="container">
      <div className="commentBox panel panel-default">
        <div className="panel-body">
          <h1>Comment Box</h1>
          <CommentList comments={quiz.comments} />
          <CommentForm onCommentSubmit={submitComment(this)} />
        </div>
      </div>
    </div>
  );
};
