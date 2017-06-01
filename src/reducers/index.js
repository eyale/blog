import { combineReducers } from 'redux'
import reducerPosts from './reducer_posts'
import { reducer as formReducer } from 'redux-form'
import selectedPostsIds from './reducer_selected_posts'

const rootReducer = combineReducers({
  posts: reducerPosts,
  form: formReducer,
  selectedPostsIds
});

export default rootReducer;
