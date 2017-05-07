import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import classnames from 'classnames';

import firebase from 'firebase';

class Hearts extends Component {
  constructor(props) {
      super(props);
      this.state = {
        hearts: 0,
        heartStyle: ''
      };
      this.getHearts = this.getHearts.bind(this);
  }

  getHearts() {
    const heartsRef = firebase.database().ref('hearts');
    heartsRef.on('value', snapshot => {
      this.setState({hearts: snapshot.val().hearts});

      setTimeout(function() {
        this.setState({heartStyle: ''});
      }.bind(this), 100);

      setTimeout(function() {
        this.setState({heartStyle: 'heart'});
      }.bind(this), 200);
    });
  }

  sendLove = () => {
    this.state.hearts ++;
    firebase.database().ref('hearts').set({
      hearts: this.state.hearts
    });
    this.setState(this.state);
  }

  componentDidMount() {
    this.getHearts();
  }

  render() {
    let heartClasses = classnames('heart-animated', this.state.heartStyle);
    return (
      <div className="hearts">
       <div onClick={this.sendLove.bind(this)}>
         <label>{this.state.hearts}</label>
         <i className="fa fa-heart"></i>
         <div className={heartClasses}>
           <i className="fa fa-heart"></i>
         </div>
       </div>
      </div>
    );
  }
}

export default Hearts;
