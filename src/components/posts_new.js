import React, { Component } from 'react'
import { Link } from 'react-router'

class PostsNew extends Component {
  render () {
    return (
      <div>
        <div className='text-xs-right'>
          <Link to='/' className='btn btn-primary'>Home</Link>
        </div>
        Create Form.
      </div>
    )
  }
}

export default PostsNew