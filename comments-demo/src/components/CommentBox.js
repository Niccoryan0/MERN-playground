import React, { useState, useEffect } from "react";

import CommentList from './CommentList'
import CommentForm from './CommentForm'

const CommentBox = (quiz) => {
  const submitComment = (newComment) => {
    console.log(newComment)
    quiz.comments = quiz.comments.concat([newComment]);
    axios.post('https://interviewprepapp.azurewebsites.net/api/quiz/' + quiz.id, quiz, {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': "*",
      Authorization: 'Bearer ' + localStorage.getItem('token')
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  return (
    <div className="container">
      <div className="commentBox panel panel-default">
        <div className="panel-body">
          <h1>Comment Box</h1>
          <CommentList comments={quiz.comment} />
          <CommentForm onCommentSubmit={submitComment(this)} />
        </div>
      </div>
    </div>
  );
};
export default CommentBox;