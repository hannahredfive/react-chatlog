import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages} />
        {/* <ChatEntry props={chatMessages[0]} /> */}
        {/* Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
