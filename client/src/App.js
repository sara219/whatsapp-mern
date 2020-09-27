import React, {useEffect} from 'react';
import './App.css'
import { Chat } from './component/Chat';
import { Sidebar } from './component/Sidebar';
import Pusher from 'pusher-js'

function App() {

  useEffect(() => {
    // connects to Channels and subscribes to a channel called messages, listening for an event called inserted.
    const pusher = new Pusher('a43f72fa78eb808b505d', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('message');
    channel.bind('inserted', (data) => {
      alert(JSON.stringify(data));
    });
  }, []);

  return (
    <div className='app'>
      <div className='app__body'>
      <Sidebar />
      <Chat />
      </div>
    </div>
  );
}

export default App;
