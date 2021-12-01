import React from 'react';
import './Sidebar.css';
import SidebarOptions from './SidebarOptions';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';
import ExploreIcon from './ExploreIcon';


function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon fontSize="large" className="twittericon"/>

            <SidebarOptions text="Home" active Icon={HomeIcon}/>
            <SidebarOptions text="Explore" Icon={ExploreIcon}/>
            <SidebarOptions text="Notifications" Icon={NotificationsNoneIcon}/>
            <SidebarOptions text="Messages" Icon={MailOutlineIcon}/>
            <SidebarOptions text="Bookmarks" Icon={BookmarkBorderIcon}/>
            <SidebarOptions text="Lists" Icon={ListAltIcon}/>
            <SidebarOptions text="Profile" Icon={PermIdentityIcon}/>
            <SidebarOptions text="More" Icon={MoreHorizIcon}/>
        
            <Button variant="outlined" className="sidebar_tweet" fullWidth>Tweet</Button>

            <div className="userdetails">
                <div className="userinfo">
                    <img src="rajat.jpg" alt="RB"/>
                    <div className="usertext">
                        <p className="username">Rajat Bhanarkar</p>
                        <p className="userhandle">@irajatbhanarkar</p>
                    </div>
                </div>
                <MoreHorizIcon />
            </div>
        </div>
    )
}

export default Sidebar;
