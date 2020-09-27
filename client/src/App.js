import React, {useEffect, useState} from 'react';
import './App.css'
import { Chat } from './component/Chat';
import { Sidebar } from './component/Sidebar';
import Pusher from 'pusher-js'
import axios from './axios'


function App() {

  const [message, setMessage] = useState([]);

  useEffect(() => {
    //  fetching the api
    axios.get('/api/v1/message/sync')
    .then(response => {
      setMessage(response.data)
    })
  }, [])

  useEffect(() => {
    // connects to Channels and subscribes to a channel called messages, listening for an event called inserted.
    const pusher = new Pusher('a43f72fa78eb808b505d', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('message');
    channel.bind('inserted', (newMessage) => {
      // new message come -> get back all the messages and the new one
      setMessage([...message, newMessage])
    });

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }



  }, [message]);

  console.log(message);

  return (
    <div className='app'>
      <div className='app__body'>
      <Sidebar />
      <Chat message={message} />
      </div>
    </div>
  );
}

export default App;
