import React from 'react';
import "./Post.css";

class Post extends React.Component {
    render() {
      return (
        <article className="Post" ref="Post">
            <header>
                <div className = "Post-user">
                    <div className="Post-user-avatar"><img src='../../avatar.jpg' alt='avatar' /> </div>
                </div>
                <div className="Post-user-nickname">
                    <span>Stranger</span>
                </div>
            </header>
            <div className="Post-image">
                <div className="Post-image-bg">
                    <img alt="Forest" src='https://images.unsplash.com/photo-1607798136809-1483b83f32fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80' />
                </div>
            </div>
            <div className="Post-caption">
                <strong>Stranger</strong> is here!
            </div>
        </article>
      )
    };
}

export default Post;