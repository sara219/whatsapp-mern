import React from 'react'
import '../style/Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';import { Avatar, IconButton } from '@material-ui/core';
import { SidebarChat } from './SidebarChat';

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className='sidebar__header'>
                <Avatar src='https://64.media.tumblr.com/2d2bb058ee173ae5619507b30d072e94/tumblr_pr4vy9yP4F1uph2q2o1_400.jpg'/>
                <div className='sidebar__headerRight'>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className='sidebar__search'>
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon />
                    <input placeholder='Search or Start new chat' type='text'/>
                </div>
            </div>
            <div className="sidebar__chat">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}