import { PostsActionTypes } from '../action-types';
import { Post, Comment } from '../reducers/posts-reducer';

interface FetchPostsAction {
  type: PostsActionTypes.FETCH_POSTS;
}

interface FetchPostsSuccessAction {
  type: PostsActionTypes.FETCH_POSTS_SUCCESS;
  payload: Post[];
}

interface FetchPostsErrorAction {
  type: PostsActionTypes.FETCH_POSTS_ERROR;
  payload: string;
}

// // Third
// interface FetchPostAction {
//   type: PostsActionTypes.FETCH_POST;
// }

interface FetchPostSuccessAction {
  type: PostsActionTypes.FETCH_POST_SUCCESS;
  payload: { post: Post; comments: Comment[] };
}

// interface FetchPostErrorAction {
//   type: PostsActionTypes.FETCH_POST_ERROR;
//   payload: string;
// }

export type Action =
  | FetchPostsAction
  | FetchPostsSuccessAction
  | FetchPostsErrorAction
  | FetchPostSuccessAction;
