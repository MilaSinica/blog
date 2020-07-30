import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';
import Comments from './Comments';

function ShowPost({ fetchPost, post, match, handleSubmit, deletePost, history }) {
    useEffect(() => {
        const id = match.params.id;
        if(!post) fetchPost(id);
    }, [fetchPost, post, match.params.id]);

    const PasswordField = ({ input, meta }) => {
      return (
        <div>
          <input 
            label="Title"
            type="password"
            className="form-control" 
            id="inputPassword2"
            placeholder="Enter Password"
            {...input}
          />
          {meta.error && meta.touched && <span style={{color: "red"}}>{meta.error}</span>}
        </div>
      )
    }

    const onPostDelete = () => {
      const id = match.params.id;
      deletePost(id, () => history.push('/'));
    }

    if(!post) return null;
    return (
      <div>
          <div className="float-right">
            <Link className="btn btn-info" to="/">Back</Link>
          </div>
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">{post.title}</h1>
                <p className="lead">{post.categories}</p>
                <hr className="my-4" />
                <p className="lead">{post.content}</p>
            </div>
          </div>
          <button className="btn btn-light float-right" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Delete Post
          </button>
          <div className="collapse" id="collapseExample">
            <form className="form-inline" onSubmit={handleSubmit(onPostDelete)}>
              <div className="form-group mx-sm-3 mb-2">
                <Field 
                  name='password'
                  component={PasswordField}
                />
                </div>
                <button type="submit" className="btn btn-danger mb-2">Confirm and delete</button>
            </form>
          </div>
          <h3 className="display-4">Comments</h3>
          <hr className="my-4" />
          <Comments />
      </div>
    );
  }

  function mapStateToProps({ posts }, ownProps) {
      return {
          //get info about current post id from ReactRouter and get it from state
          post: posts[ownProps.match.params.id]
      }
  }

  const validate = (formValues) => {
    const PSWRD = 'kakens';
    const errors = {};
    if(!formValues.password) {
        errors.title = "You must provide a password";
    }
    if(formValues.password !== PSWRD) {
        errors.password = "Wrong password";
    }
    return errors;
}

  export default reduxForm({
    form: 'NewPostForm',
    validate,
    touchOnBlur: false
})(
    connect(mapStateToProps, { fetchPost, deletePost })(ShowPost)
);
