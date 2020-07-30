import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import postsReducer from './postsReducer';
import commentsReducer from './commentsReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  form: formReducer,
  comments: commentsReducer,
  users: usersReducer
});

export default rootReducer;
