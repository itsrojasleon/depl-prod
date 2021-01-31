import { Comment as C } from '../state/reducers/posts-reducer';
import './comment.css';

const Comment: React.FC<C> = ({ email, body, name }) => {
  return (
    <div className="comment">
      <p className="comment-name">
        <strong>{name}</strong>
      </p>
      <p className="comment-body">{body}</p>
      <p className="comment-email">{email}</p>
    </div>
  );
};

export default Comment;
