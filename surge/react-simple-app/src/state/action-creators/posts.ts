import { Dispatch } from 'redux';
import { PostsActionTypes } from '../action-types';
import { Action } from '../actions';
import { Api } from '../../api';

const fetchPosts = ({ page }: { page: number }) => {
  return async (dispatch: Dispatch<Action>) => {
    if (page === 1) {
      dispatch({ type: PostsActionTypes.FETCH_POSTS });
    }

    try {
      const payload = await Api.getPosts({ page });

      dispatch({ type: PostsActionTypes.FETCH_POSTS_SUCCESS, payload });
    } catch (err) {
      dispatch({
        type: PostsActionTypes.FETCH_POSTS_ERROR,
        payload: err.message,
      });
    }
  };
};

const fetchPost = ({ id }: { id: number }) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: PostsActionTypes.FETCH_POSTS });

    try {
      const [post, comments] = await Promise.all([
        Api.getSinglePost({ id }),
        Api.getPostComments({ id }),
      ]);

      dispatch({
        type: PostsActionTypes.FETCH_POST_SUCCESS,
        payload: { post, comments },
      });
    } catch (err) {
      dispatch({
        type: PostsActionTypes.FETCH_POSTS_ERROR,
        payload: err.message,
      });
    }
  };
};

export { fetchPosts, fetchPost };
