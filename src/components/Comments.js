import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchComments, fetchUsers } from '../actions';

const Comments = ({ fetchComments, fetchUsers, comments, users }) => {
    useEffect(() => {
        fetchComments();
        fetchUsers();
    }, [fetchComments, fetchUsers]);

    if(!comments || !users) return null;

    const renderList = () => {
        return comments.map(comment => {
            return (
                <div className="item" key={comment.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h4>{comment.title}</h4>
                            <p>{comment.body}</p>
                            {users[comment.userId] && <div className="header">{ users[comment.userId].name }</div>}
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (        
        <div className="ui relaxed divided list">
            { renderList() }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        comments: state.comments,
        users: state.users
    }
}

export default connect(mapStateToProps, { fetchUsers, fetchComments })(Comments);