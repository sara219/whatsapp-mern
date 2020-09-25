import React from 'react';
import { Chat } from './component/Chat';
import { Sidebar } from './component/Sidebar';

function App() {
  return (
    <div>

      {/* Sidebar */}
      <Sidebar />

      {/* chat */}
      <Chat />
    </div>
  );
}

export default App;
