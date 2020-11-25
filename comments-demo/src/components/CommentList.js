import Comment from './Comment';

const CommentList = (comments) => {
  let commentNodes = comments.map(function(comment, index) {
    return (<Comment key={index} comment={comment} />);
  });
  return (<div className="commentList">{commentNodes}</div>);
}