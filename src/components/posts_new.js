import React, { Component } from 'react'
import { Link } from 'react-router'
import { reduxForm } from 'redux-form'
import { createPost } from '../actions'

class PostsNew extends Component {
  render () {
    const {
      fields: { title, categories, content },
      handleSubmit,
      createPost
    } = this.props

    return (
      <div>
        <div className='text-xs-right'>
          <Link to='/' className='btn btn-primary'>Home</Link>
        </div>
        <form onSubmit={handleSubmit(createPost)}>
          <h3>Create a New Post</h3>
          <div className='form-group'>
            <label htmlFor=''>Title</label>
            <input
              type="text"
              className='form-control'
              {...title} />
          </div>
          <div className='form-group'>
            <label htmlFor=''>Categories</label>
            <input
              type="text"
              className='form-control'
              {...categories} />
          </div>
          <div className='form-group'>
            <label htmlFor=''>Content</label>
            <input
              type="textarea"
              className='form-control'
              {...content} />
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew)