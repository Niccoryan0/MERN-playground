const Comment = (comment) => {
  return (
    <div className="comment panel panel-default">
       <div className="panel-heading">
         <Image src={comment.avatar} roundedCircle />
         <h4>{comment.username}</h4>
       </div>
       <div className="panel-body">
         {comment.comment}
       </div>
     </div>
   );
}