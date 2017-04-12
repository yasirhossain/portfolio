import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChatMessages extends Component {

    constructor(props) {
        super(props);
        this.onChatRecieve = this.onChatRecieve.bind(this);
    }

    onChatRecieve(event) {
      event.preventDefault();
    }

    render() {
        return (
            <div className="container">
              <h2>Chat Messages</h2>
              <ul>
                <li>Default Message</li>
              </ul>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {

}

function mapStateToProps(state) {

}

export default connect(mapStateToProps, mapDispatchToProps)(ChatMessages);
