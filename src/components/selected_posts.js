import React, { Component } from 'react'
import { connect } from 'react-redux'
import SelectedPostsSelector  from '../selectors'

class SelectedPosts extends Component {
  render () {
    const { posts } = this.props

    if (!posts) return <div>have no selected posts</div>

    if (posts) {

      return (
        <ul className='list-group'>
          {posts.map(post => <li className='list-group-item' key={post.id}>{post.title}</li>)}
        </ul>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    posts: SelectedPostsSelector(state)
  }
}

export default connect(mapStateToProps)(SelectedPosts)
