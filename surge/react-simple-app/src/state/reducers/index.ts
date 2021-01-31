import { combineReducers } from 'redux';
import { postsReducer } from './posts-reducer';

export const reducers = combineReducers({
  posts: postsReducer,
});

export type RootState = ReturnType<typeof reducers>;
