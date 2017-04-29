import React, { Component } from 'react';
import firebase from 'firebase';

class Poll extends Component {
  constructor(props) {
      super(props);
      this.state = {
        pollData: {
          title: 'Do you like polls?',
          options: [
            {
              label: 'yes',
              value: 0
            },
            {
              label: 'no',
              value: 0
            },
            {
              label: 'maybe so',
              value: 0
            }
          ],
          total: 0
        }
      };
  }

  componentDidMount() {
    this.getVotes();
  }

  getVotes = () => {
    const pollRef = firebase.database().ref('poll');
    pollRef.on('value', snapshot => {
      if (snapshot.val() !== null) {
        this.setState({ pollData: snapshot.val().message });
      }
    });
  }

  castVote = (response) => {
    this.state.pollData.options.map((vote) => {
      if (response.label === vote.label) {
        vote.value ++;
        this.state.pollData.total ++;

        firebase.database().ref('poll').set({
          message: this.state.pollData,
          createdAt: firebase.database.ServerValue.TIMESTAMP
        });

        this.setState(this.state);
      }
    })
  }

  render() {
    return (
      <div className="poll">
        <h1>{this.state.pollData.title}</h1>
        <ul className="list-unstyled">
          {
            this.state.pollData.options.map((vote) => {
              let pollStyle = {
                width: `${(vote.value / this.state.pollData.total) * 100}%`
              }
              return (
                <li key={vote.label} onClick={this.castVote.bind(this, vote)}>
                  <label className="title">{vote.label}</label>
                  <label className="value">{vote.value}</label>
                  <div className="bar" style={pollStyle}></div>
                </li>
              )
            })
          }
        </ul>
        <label className="total">{this.state.pollData.total} Total Votes</label>
      </div>
    );
  }
}

export default Poll;
