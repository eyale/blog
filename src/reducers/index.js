import { combineReducers } from 'redux'
import posts from './reducer_posts'
import { reducer as formReducer } from 'redux-form'
import selectedPostsIds from './reducer_selected_posts'

const rootReducer = combineReducers({
  form: formReducer,
  posts,
  selectedPostsIds
});

export default rootReducer;
