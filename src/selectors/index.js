import _ from 'lodash'
import { createSelector } from 'reselect'

export const postsSelector = state => state.posts
export const selectedPostsSelector = state => state.selectedPostIds

const getPosts = (posts, selectedPostIds) => {
  //the arguments names in function is my chosen names
  //I suppose
  return  _.filter(posts, post => _.includes(selectedPostIds, post.id))
}

export default createSelector(
  postsSelector,
  selectedPostsSelector,
  getPosts
)
