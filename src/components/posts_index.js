import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPosts } from '../actions'
import { Link } from 'react-router'

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts()
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
        List of posts.
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPosts}, dispatch)
}

export default connect(null, mapDispatchToProps)(PostsIndex)

// or without mapDispatchToProps
// export default connect(null, { fetchPosts })(PostsIndex)