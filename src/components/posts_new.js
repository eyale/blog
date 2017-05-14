import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import { Link } from 'react-router'
import { reduxForm } from 'redux-form'
import { createPost } from '../actions'

const FIELDS = {
  title: {
    type:'input',
    label: 'Post Title',
    id: Math.random()
  },
  categories: {
    type:'input',
    label: 'Enter category for the Post',
    id: Math.random()
  },
  content: {
    type:'textarea',
    label: 'Post Content',
    id: Math.random()
  }
}

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

  renderField(fieldConfig, field) {
    const fieldHelper = this.props.fields[field]

    return (
      <div
        className={`form-group ${ fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : ''}`} key={fieldConfig.id}>
        <label>{fieldConfig.label}</label>
        <fieldConfig.type
          type="text"
          className='form-control'
          {...fieldHelper} />
        {(fieldHelper.touched && fieldHelper.error) && <div className='text-help'>{fieldHelper.error}</div>}
      </div>
    )
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
          {_.map(FIELDS, this.renderField.bind(this))}
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

  _.each(FIELDS, (type, field) => {
    if (!values[field]) {
      errors[field] = `Require field ${field}`
    }
  })

  return errors
}

// export default reduxForm({settings}, mapStateToProps, mapDispatchToProps)(Component)
export default reduxForm({
  form: 'PostsNewForm',
  fields: _.keys(FIELDS), //Creates an array of the own enumerable property names of object
  validate
}, null, { createPost })(PostsNew)
