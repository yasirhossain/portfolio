import React, { Component } from 'react';

import ChatMessages from './chat_messages'
import ChatInput from './chat_input'

class Chat extends Component {
  render() {
    return (
      <div>
        <ChatMessages />
        <ChatInput />
      </div>
    );
  }
}

export default Chat;