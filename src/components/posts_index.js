import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import SelectedPostsList from './selected_posts'

import * as actions from '../actions/index'

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

    if (!posts.length) return <div>Please wait Loading Posts ...</div>

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
            to='knowledge/sharing'
            className='btn btn-primary'>
              Knowledge Sharing
          </Link>
          <Link
            to='posts/new'
            className='btn btn-primary'>
              Add a Post
          </Link>
        </div>
        <h3>Selected Posts</h3>
        <hr />
        <SelectedPostsList />
        <hr />
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.all,
  selectedPostsIds: state.selectedPostsIds
})

export default connect(mapStateToProps, actions)(PostsIndex)
