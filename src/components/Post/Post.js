import React from 'react';
import "./Post.css";
//import avatar from "./../../avatar.jpg";

class Post extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
      const nickname = this.props.nickname;
      const avatar = this.props.avatar;
      const image = this.props.image;
      const caption = this.props.caption;
      return (
        <article className="Post" ref="Post">
            <header>
                <div className = "Post-user">
                    <div className="Post-user-avatar"><img src={avatar} alt='avatar' /> </div>
                    <span className="Post-user-nickname">{nickname}</span>
                </div>                
            </header>
            <div className="Post-image">
                <div className="Post-image-bg">
                    <img alt={caption} src={image} />
                </div>
            </div>
            <div className="Post-caption">
                <strong>{nickname}</strong> is here!                
            </div>
        </article>
      )
    };
}

export default Post;