import React from 'react';

const AuthorHeader = ({user}) => {
    if(!user) {
        return null;
    }
    return (
        <div className="header">{ user.name }</div>
    )
}  

export default AuthorHeader;
