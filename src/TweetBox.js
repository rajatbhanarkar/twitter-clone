import React from 'react';
import './TweetBox.css';
import InsertPhotoOutlinedIcon from '@material-ui/icons/InsertPhotoOutlined';
import MovieFilterOutlinedIcon from '@material-ui/icons/MovieFilterOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import { Button } from '@material-ui/core';

function TweetBox() {
    return (
        <div className="tweetBox">
            <img src="rajat.jpg" alt="RB"/>
            <div className="tweetBox_main">
                <input placeholder="What's happening?"/>
                <div className="tweetBox_actions">
                    <div className="tweetBox_action1">
                        <InsertPhotoOutlinedIcon />
                        <MovieFilterOutlinedIcon />
                        <InsertChartOutlinedIcon />
                        <SentimentSatisfiedOutlinedIcon />
                        <EventOutlinedIcon />
                    </div>
                    <Button variant="outlined" className="tweetBox_tweet" fullWidth>Tweet</Button>
                </div>
            </div>
        </div>
    )
}

export default TweetBox;
