import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../state/reducers/posts-reducer';
import Comment from './Comment';
import './posts-details.css';

const PostsDetails: React.FC<Post> = ({
  userId,
  id,
  title,
  body,
  comments,
}) => {
  const [showComments, setShowComments] = useState(true);

  return (
    <div className="posts-details">
      <Link to={`/posts/${id}`}>
        <h3 className="title">{title}</h3>
      </Link>
      <p className="body">{body}</p>
      {comments && (
        <div
          className="comment-title"
          onClick={() => setShowComments((prev) => !prev)}
        >
          {showComments ? (
            <p>{comments?.length} comments (click to hide)</p>
          ) : (
            <p>(click to show comments)</p>
          )}
        </div>
      )}
      {showComments &&
        comments?.map((comment) => <Comment key={comment.id} {...comment} />)}
    </div>
  );
};

export default PostsDetails;
