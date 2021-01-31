import { useEffect, useState } from 'react';
import { useActions } from '../hooks/use-actions';
import PostsList from '../components/PostsList';
import Button from '../components/Button';

const Posts: React.FC = () => {
  const { fetchPosts } = useActions();
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPosts({ page });
  }, [page]);

  return (
    <>
      <PostsList />
      <Button onClick={() => setPage((prevPage) => prevPage + 1)}>
        Load more
      </Button>
    </>
  );
};

export default Posts;
