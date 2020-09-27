import React, { useState } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import '../style/Chat.css'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons'
import MicNoneIcon from '@material-ui/icons/MicNone';
import axios from '../axios'

export const Chat = ( {message} ) => {

    // keep track what the user input 
    const [input, setInput] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault()

       await axios.post('/api/v1/message/new', {
            message: input,
            name: 'DEMO APP',
            timestamp: 'JUST NOW',
            received: true
        })

        setInput('')
    }



    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar src='https://i.pinimg.com/originals/b0/de/2c/b0de2cd9b354ae57c7229e27f75f69e3.png' />

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
                {message.map((message) => (
                    <p className={`chat__message ${message.received && 'chat__receiver'}`}>
                        <span className='chat__name'>{message.name}</span>
                        {message.message}

                        <span className='chat__timestamp'>{ message.timestamp }</span>
                    </p>
                ))}
            </div>

            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)}  placeholder='Type a message ...' />
                    <button onClick={sendMessage} type='submit'>Send a Message</button>
                </form>
                <MicNoneIcon />
            </div>

        </div>
    )
}
 