import React from 'react';
import './Trending.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Trending({category, tag, tweets}) {
    return (
        <div className="trending">
            <div className="trending_info">
                <p>{category} - Trending</p>
                <h3>{tag}</h3>
                <p>{tweets} Tweets</p>
            </div>
            <MoreHorizIcon />
        </div>
    )
}

export default Trending;
