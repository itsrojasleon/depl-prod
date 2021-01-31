import { useTypedSelector } from '../hooks/use-typed-selector';
import PostsDetails from './PostsDetails';
import './posts-list.css';

const PostsList: React.FC = () => {
  const { posts, error, loading } = useTypedSelector((state) => state.posts);

  return (
    <div>
      {loading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      <div className="posts-list">
        {posts.map((post) => (
          <PostsDetails key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default PostsList;
