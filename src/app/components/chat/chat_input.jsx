import React, { Component } from 'react';
import { setMessage } from '../../actions/firebase_actions';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.onChatSend = this.onChatSend.bind(this);
  }

  onChatSend(event) {
    event.preventDefault();

    const chatMessage = this.refs.chatMessage.value;
    setMessage(chatMessage);
    this.refs.chatMessage.value = '';
  }

  render() {
    return (
      <div>
        <div>
          <h2>Chat</h2>
          <form id="frmChat" role="form" onSubmit={this.onChatSend}>
            <input
              type="chatMessage" className="form-control" id="txtChat" ref="chatMessage" placeholder="Say Something..."
              name="chat"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default ChatInput;
