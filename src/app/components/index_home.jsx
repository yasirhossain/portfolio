import React from 'react';
import ChatMessages from './chat/chat_messages'
import ChatInput from './chat/chat_input'

export default () => {
  return (
    <div>
      <h1>Yasir's Portfolio </h1>
      <ChatMessages />
      <ChatInput />
    </div>
  );
};
