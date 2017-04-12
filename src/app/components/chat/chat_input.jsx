import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChatInput extends Component {

    constructor(props) {
        super(props);
        this.onChatSend = this.onChatSend.bind(this);
    }

    onChatSend(event) {
      event.preventDefault();

      const chatMessage = this.refs.chatMessage.value;
      // Send to Firebase here
      console.log(chatMessage);
      this.refs.chatMessage.value = '';
    }

    render() {
        return (
            <div>
                <div className="container">
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

function mapDispatchToProps(dispatch) {

}

function mapStateToProps(state) {

}

export default connect(mapStateToProps, mapDispatchToProps)(ChatInput);
