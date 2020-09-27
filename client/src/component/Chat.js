import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import '../style/Chat.css'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons'
import MicNoneIcon from '@material-ui/icons/MicNone';

export const Chat = () => {
    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar />

            <div className="chat__headerInfo">
                <h3>Room Name</h3>
                <p>Last seen at ... </p>
            </div>

            <div className='chat__headerRight'>
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
            </div>

            <div className="chat__body">

                <p className='chat__message'>
                    <span className='chat__name'>Sara</span>
                    Hey!

                    <span className='chat__timestamp'>{new Date().toUTCString()}</span>
                </p>

                <p className='chat__receiver chat__message'>
                    <span className='chat__name'>JD</span>
                    Hii!

                    <span className='chat__timestamp'>{new Date().toUTCString()}</span>
                </p>
            
            </div>

            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input placeholder='Type a message ...' />
                    <button type='submit'>Send a Message</button>
                </form>
                <MicNoneIcon />
            </div>

        </div>
    )
}
 