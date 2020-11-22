const CommentList = (comments) => {
  let commentNodes = comments.map(function(comment, index) {
    return (<Comment key={index} author={comment.author}>{comment.text}</Comment>);
  });
  return (<div className="commentList">{commentNodes}</div>);
}