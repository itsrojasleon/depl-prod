import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useActions } from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selector';
import PostsDetails from '../components/PostsDetails';

const Post: React.FC = () => {
  const { fetchPost } = useActions();
  const { post, error, loading } = useTypedSelector((state) => state.posts);
  const { postId } = useParams<{ postId: string }>();

  useEffect(() => {
    fetchPost({ id: parseInt(postId) });
  }, [postId]);

  if (loading) return <h3>Loading...</h3>;
  if (!post) return <h3>Post did not found!</h3>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <PostsDetails {...post} />
    </div>
  );
};

export default Post;
