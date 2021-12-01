import React from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <div className="feed_header">
                <h2>Home</h2>
                <img src="https://cdn.iconscout.com/icon/free/png-512/sparkles-star-decoration-celebration-christmas-crackers-33952.png" alt="Sparkle"/>
            </div>
            <TweetBox />
            <Post image="wwe.jpg" name="WWE" handle="WWE" time="1h" posttext={<p className="post_caption">Has <span className="tag">@RandyOrton</span> finally found out the ONLY weakness of <span className="tag">#TheFiend</span> ? Find out this Sunday as they both collide in the main event of <span className="tag">#WWETLC</span></p>} postpic="https://t8y2a8q2.stackpathcdn.com/wp-content/uploads/2020/12/Bliss-and-Fiend.jpg" likes="452K" comments="96K" retweets="139K"/>
            <Post image="https://pbs.twimg.com/profile_images/1308286636468219904/a61d79ts_400x400.jpg" name="Virat Kohli" handle="imVkohli" time="4h" posttext={<p className="post_caption">3 years and onto a lifetime together 💕</p>} postpic="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2017/11/virushka-2-1510475000.jpg" likes="452K" comments="96K" retweets="139K"/>
        </div>
    )
}

export default Feed;
