import React from 'react';

const CommentForm = (onCommentSubmit) => {

  

  return(
    <div className="commentForm panel panel-default">
       <div className="panel-heading">
         <Image src={comment.avatar} roundedCircle />
         <h4>{comment.username}</h4>
       </div>   
       <div className="panel-body">
          <form className="form" onSubmit={handleSubmit.bind(this)}>
            <input className="form-control" type="text" placeholder="Say somthing here..." /><br/>
            <input className="btn btn-default" type="submit" value="Post" />
          </form>
      </div>
    </div>
  );
}