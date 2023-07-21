import React from "react";
import "../../styles/componentStyles/Comments.css";
import Comment from "./Comment";

const Comments = ({ user, comments }) => {
  return (
    <div className="comments">
      <div className="commentInfo">
        <p className="amountComments">253,124 Comments</p>
        <div className="sortBy">
          <span className="material-symbols-outlined thin">sort</span>
          <p className="sortByTxt bold">Sort by</p>
        </div>
      </div>
      <div className="userComment">
      {user && <img
        src={user.photoURL}
        alt={user.displayName}
        className="commentAcct filled"
      />}
        <div className="userCommentBody">
          <input
            type="text"
            className="addComment"
            placeholder="Add a comment..."
          />
        </div>
      </div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
