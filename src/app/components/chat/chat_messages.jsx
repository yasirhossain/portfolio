import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import firebase from 'firebase';
import { getMessages } from '../../actions/firebase_actions';

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
        this.setState({ message: snapshot.val() });
      });
    }

    componentDidMount() {
      this.getMessages();
    }

    render() {
        return (
            <div className="container">
              <ul>
                <li>{this.state.message.message}</li>
              </ul>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
      getMessages,
  }, dispatch);
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatMessages);
