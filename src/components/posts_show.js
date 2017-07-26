import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import { Link } from 'react-router'

class PostsShow extends Component {
  componentWillMount () {
    this.props.fetchPost(this.props.params.id)
  }

  onDeleteClick () {
    this.props.deletePost(this.props.params.id)
      .then(() => { this.context.router.push('/') })
  }

  render () {
    const { post } = this.props

    if(!post) return <div>Loading...</div>

    return (
      <div>
        <h3>{post.data.title}</h3>
        <h6>Categories: {post.data.categories}</h6>
        <p>{post.data.content}</p>
        <Link to='/' className='btn btn-primary'>Home</Link>
        <Link to='/' className='btn btn-danger' onClick={this.onDeleteClick.bind(this)}>
          Delete Post
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ post: state.posts.post })

export default connect(mapStateToProps, actions)(PostsShow)
