import React from 'react';

import firebase from 'firebase';
import { FIREBASE_CONFIG } from '../config';

export const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.database();

import Github from './github/github';
import Chat from './chat/chat_index';
import Poll from './poll/poll_index';
import Hearts from './hearts/hearts_index';

export default () => {
  return (
    <div className="section">
      <div className="container-fluid">
        <h1>Code Stack</h1>
        <p>
          Currently favor MongoDB or PostgreSQL, NodeJS, Express, GraphQL, Relay, React / Redux with React Router stack.
          Also dabbling with React Native and WebVR / ReactVR with a focus on AR / VR portable web apps.
        </p>
        <p>
          Also have extensive exprience with PostgreSQL, Rails, Angular 1.x, Cordova stack.
        </p>
        <p>
          I leverage real-time services like Firebase, Pubnub and experimenting with GraphQL / Relay real-time subscriptions.
        </p>
      </div>

      <div className="container-fluid">
        <h1>Interactive Components</h1>
        <p>
          Coming from being an avid gamer and obsessed with binging on music, tv, and movies -- I love thinking of
          enhancing experiences around content. Essentially aiming to bridge the gap between content creators and their audience.
          I for one would love more experiences that bring me closer to my favorite content creators.
        </p>
        <p>
          This is a passion I like to help solve by building real-time interactive tools, and the community around it.
          Here are some examples of portable tools that allow for users to engage one another in real-time.
        </p>

        <p className="hide">
          I have a passion for building real-time components that bring peoples experiences together. It's
          funny to me that the Internet is a place where it brings people together, yet, we're usually in isolated
          experiences around the same content. Gone are the days of water cooler conversations, since everyone is watching on
          their own time. Cant have a human interaction without someone yelling out <span className="call-out">SPOILER ALERT</span> and
          killing the engaging discussion that could have potentially happened. Now what if there was a way to bring people into a conversation
          and still allow for them to watch it on their own time? This and many other real-time concurrent sessions is what I am fascinated in solving for.
        </p>

        <Chat />
        <Poll />
      </div>
    </div>
  );
};
