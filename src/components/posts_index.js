import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import SelectedPosts from './selected_posts'

import {
  fetchPosts,
  selectPost,
  deselectPost
} from '../actions/index'

class PostsIndex extends Component {
  componentWillMount () {
    this.props.fetchPosts()
  }

  handlePostSelect ({ id }, event ) {
    const { selectPost, deselectPost } = this.props

    event.target.checked ? selectPost(id) : deselectPost(id)
  }

  renderPosts () {
    const { posts, selectedPostsIds } = this.props

    return posts.map((post) => {
      return (
        <li className='list-group-item' key={post.id}>
          <input
            checked={_.includes(selectedPostsIds, post.id)}
            type='checkbox'
            onChange={this.handlePostSelect.bind(this, post)}
          />
          <Link to={`posts/${post.id}`}>
            <em className='pull-xs-right'>{post.categories}</em>
            <strong>{post.title}</strong>
          </Link>
        </li>
      )
    })
  }

  render () {
    return (
      <div>
        <div className='text-xs-right'>
          <Link
            to='posts/new'
            className='btn btn-primary'>
              Add a Post
          </Link>
        </div>
        <h3>Selected Posts</h3>
        <hr />
        {/*<SelectedPosts />*/}
        <hr />
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.all,
    selectedPostsIds: state.selectedPostsIds
  }
}

export default connect(mapStateToProps, { fetchPosts, selectPost, deselectPost })(PostsIndex)
