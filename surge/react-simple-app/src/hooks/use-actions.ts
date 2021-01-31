import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../state';

export const useActions = () => {
  const dispatch = useDispatch();

  // will return something like this:
  // { fetchPosts: dispatch(fetchPosts) }
  return bindActionCreators(actionCreators, dispatch);
};
