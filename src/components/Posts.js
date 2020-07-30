import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

function Posts({ fetchPosts, posts }) {

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    const renderPosts = () => _.map(posts, post => {
        return (
            <li className="list-group-item" key={post.id} style={{backgroundColor: '#f0f0f0'}}>
                <Link to={`/posts/show/${post.id}`}>{post.title}</Link>
            </li>
        )
    })

    return (
      <div>
          <div className="float-right">
              <Link className="btn btn-info" to="/posts/new">Add a Post</Link>
          </div>
          <h3 className="display-3">Posts</h3>
          <ul className="list-group" style={{marginTop: '20px'}}>
            {renderPosts()}
          </ul>
      </div>
    );
  }

  function mapStateToProps(state) {
      return {
          posts: state.posts
      }
  }
  
  export default connect(mapStateToProps, {fetchPosts})(Posts);