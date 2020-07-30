import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

function NewPost({ handleSubmit, createPost, history }) {
    const CustomField = ({label, meta, input}) => {
        const {touched, error} = meta;
        const errorMsg = touched && error;
        return (
            <div className="form-group">
                <label>{label}</label>
                <input 
                    type="text"
                    className={`form-control ${errorMsg ? 'is-invalid' : ''}`}
                    {...input}
                />
                { touched && <div className="invalid-feedback">{errorMsg}</div> }
            </div>
        )
    }

    const TextField = ({input, meta, label}) => {
        const {touched, error} = meta;
        const errorMsg = touched && error;
        return (
            <div className="form-group">
                <label>{label}</label>
                <textarea 
                    type="textarea"
                    className={`form-control ${errorMsg ? 'is-invalid' : ''}`}
                    {...input}
                />
                { touched && <div className="invalid-feedback">{error}</div> }
            </div>
        )
    }

    const onSubmit = values => {
        createPost(values, () => history.push('/'));
    }

    return (
      <div>
          <div className="float-right">
            <Link className="btn btn-info" to="/">Back</Link>
          </div>
          <h3 className="display-3">Create New Post</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
              <Field 
                name='title'
                label="Title"
                component={CustomField}
              />
              <Field 
                name='categories'
                label="Categories"
                component={CustomField}
              />
              <Field 
                name='content'
                label="Post Content"
                component={TextField}
              />
              <button type="submit" className="btn btn-primary" style={{marginRight: '10px'}}>Create</button>
              <Link className="btn btn-secondary" to="/">Cancel</Link>
          </form>
      </div>
    );
  }

const validate = (formValues) => {
    const errors = {};
    if(!formValues.title) {
        errors.title = "You must enter a title";
    }
    if(!formValues.content) {
        errors.content = "You must enter a content";
    }
    return errors;
}

export default reduxForm({
    form: 'NewPostForm',
    validate
})(
    connect(null, {createPost})(NewPost)
);
