import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import firebase from 'firebase';

class ChatMessages extends Component {
  constructor(props) {
      super(props);
      this.state = {
        message: [],
      };
      this.getMessages = this.getMessages.bind(this);
  }

  getMessages() {
    const messagesRef = firebase.database().ref('messages');
    messagesRef.on('value', snapshot => {
      this.setState({ message: snapshot.val() });
    });
  }

  componentDidMount() {
    this.getMessages();
  }

  render() {
    const message = this.state.message;
    return (
      <div className="message">
        <ReactCSSTransitionGroup
          transitionName="message"
          transitionEnterTimeout={0}
          transitionLeaveTimeout={0}>
          <div key={message.message}>{message.message}</div>
       </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default ChatMessages;
