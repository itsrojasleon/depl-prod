import { PostsActionTypes } from '../action-types';
import { Action } from '../actions';

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments?: Comment[];
}

interface PostsState {
  loading: boolean;
  error: string | null;
  posts: Post[];
  post: Post | null;
}

const initialState = { loading: false, error: null, posts: [], post: null };

const postsReducer = (
  state: PostsState = initialState,
  action: Action
): PostsState => {
  switch (action.type) {
    case PostsActionTypes.FETCH_POSTS:
      return { ...state, loading: true, error: null, posts: [] };
    case PostsActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        posts: [...state.posts, ...action.payload],
      };
    case PostsActionTypes.FETCH_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        posts: [],
        post: null,
      };
    // single post
    case PostsActionTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        post: {
          ...action.payload.post,
          comments: action.payload.comments,
        },
      };
    default:
      return state;
  }
};

export { postsReducer };
