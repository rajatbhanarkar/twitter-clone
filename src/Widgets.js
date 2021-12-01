import React from 'react';
import './Widgets.css';
import SearchBar from './SearchBar';
import Trending from './Trending';
import Follow from './Follow';

function Widgets() {
    return (
        <div className="widgets">
            <SearchBar />

            <h2>What's Happening</h2>

            <div className="trendings">
                <Trending category="Entertainment" tag="#Filhal2" tweets="6.9K"/>
                <Trending category="Technology" tag="#SnapchatAstrology" tweets="95K"/>
                <Trending category="Politics" tag="#CSIEndSilenceInSSRCase" tweets="174K"/>
                <Trending category="Wrestling" tag="#CMPunk" tweets="58K"/>
                <Trending category="Politics" tag="#BoycottPatanjali" tweets="21K"/>
            </div>

            <h2>Who to follow</h2>
            
            <div className="follows">
                <Follow image="mahima.jpg" name="Mahima Talegaonkar" handle="@mahimatalegaonkar"/>
                <Follow image="https://pbs.twimg.com/profile_images/856580774220357634/H35WMMje_400x400.jpg" name="Bhuvan Bam" handle="@bhuvan_bam"/>
            </div>
        </div>
    )
}

export default Widgets;
