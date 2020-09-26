import React from 'react';
import './App.css'
import { Chat } from './component/Chat';
import { Sidebar } from './component/Sidebar';

function App() {
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
