import React from 'react';

const Post = ({ post }) =>
{
    return(
        <div className="Post">
            <h2>{ post.title  || "[ NO TITLE SPECIFIED ]" }</h2>
            <p className="content"> {post.content || "[ NO CONTENT SPECIFIED ]" }</p>
            <p className="meta">
                <b>by { post.username || "[ NO USER SPECIFIED ]"} - { new Date(post.timestamp).toLocaleString() }</b>
            </p>
        </div>
    )
}

export default Post;
