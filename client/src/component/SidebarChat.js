import React from 'react'
import '../style/SidebarChat.css'
import { Avatar } from '@material-ui/core'


export const SidebarChat = () => {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>This is the last message</p>
            </div>
        </div>
    )
}
