import React from 'react';
import './Post.css';

function Post({image, name, handle, time, posttext, postpic, likes, comments, retweets}) {
    return (
        <div className="post">
            <img src={image} alt={name}/>
            <div className="post_main">
                <div className="post_top">
                    <h2>{name}</h2><img src="verified.png" alt=""/><h3>@{handle} &nbsp;.  &nbsp;{time}</h3>
                </div>
                {posttext}
                <img className="post_pic" src={postpic} alt=""/>
                <div className="post_actions">
                    <div className="post_comment">
                        <img src="comment.png" alt=""/><p>{comments}</p>
                    </div>
                    <div className="post_retweet">
                        <img src="retweet.png" alt=""/><p>{retweets}</p>
                    </div>
                    <div className="post_like">
                        <img src="like.png" alt=""/><p>{likes}</p>
                    </div>
                    <img src="upload.png" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Post;
