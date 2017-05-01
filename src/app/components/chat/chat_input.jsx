import React, { Component } from 'react';
import firebase from 'firebase';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.onChatSend = this.onChatSend.bind(this);
  }

  onChatSend(event) {
    event.preventDefault();

    const chatMessage = this.refs.chatMessage.value;

    firebase.database().ref('messages').set({
      message: chatMessage,
      createdAt: firebase.database.ServerValue.TIMESTAMP
    });

    this.refs.chatMessage.value = '';
  }

  render() {
    return (
      <div>
        <div>
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
