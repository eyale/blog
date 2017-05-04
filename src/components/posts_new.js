import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { reduxForm } from 'redux-form'
import { createPost } from '../actions'

class PostsNew extends Component {
  static contextTypes = {
    // this.context.router
    router: PropTypes.object
  }

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        // blog post has been created, navigate the user to the index
        // we navigate by calling this.context.router.push
        // with the new path to navigate to

        this.context.router.push('/')

      })
  }
  render () {
    const {
      fields: { title, categories, content },
      handleSubmit,
      createPost
    } = this.props

    return (
      <div>
        <div className='text-xs-right'>
        </div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <h3>Create a New Post</h3>
          <div className={`form-group ${ title.touched && title.invalid ? 'has-danger' : ''}`}>
            <label htmlFor=''>Title</label>
            <input
              type="text"
              className='form-control'
              {...title} />
            {(title.touched && title.error) && <div className='text-help'>{title.error}</div>}
          </div>
          <div className={`form-group ${ categories.touched && categories.invalid ? 'has-danger' : ''}`}>
            <label htmlFor=''>Categories</label>
            <input
              type="text"
              className='form-control'
              {...categories} />
            {(categories.touched && categories.error) && <div className='text-help'>{categories.error}</div>}
          </div>
          <div className={`form-group ${ content.touched && content.invalid ? 'has-danger' : ''}`}>
            <label htmlFor=''>Content</label>
            <input
              type="textarea"
              className='form-control'
              {...content} />
            {(content.touched && content.error) && <div className='text-help'>{content.error}</div>}
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
          <Link to='/' className='btn btn-danger'>Cancel</Link>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {}

  if (!values.title) { errors.title = 'Require' }
  if (!values.categories) { errors.categories = 'Require' }
  if (!values.content) { errors.content = 'Require' }

  return errors
}

// export default reduxForm({settings}, mapStateToProps, mapDispatchToProps)(Component)
export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew)