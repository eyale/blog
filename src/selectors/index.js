import _ from 'lodash'
import { createSelector } from 'reselect'

export const postsSelector = state => state.posts.all
export const selectedPostsSelector = state => state.selectedPostsIds

const getPosts = createSelector(
  [ postsSelector, selectedPostsSelector ],
  (postsSelector, selectedPostsSelector) => _.filter(postsSelector, post => _.includes(selectedPostsSelector, post.id))
)

export default getPosts
