import React, { Component } from 'react';
import firebase from 'firebase';

class ChatMessages extends Component {
  constructor(props) {
      super(props);
      this.state = {
        message: [],
      };
      this.getMessages = this.getMessages.bind(this);
  }

  getMessages(event) {
    const messagesRef = firebase.database().ref('messages');
    messagesRef.on('value', snapshot => {
      this.setState({ message: snapshot.val().message });
    });
  }

  componentDidMount() {
    this.getMessages();
  }

  render() {
    return (
      <div>
        <ul className="list-unstyled">
          <li className="message">{this.state.message}</li>
        </ul>
      </div>
    );
  }
}

export default ChatMessages;
