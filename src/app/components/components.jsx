import React from 'react';

import firebase from 'firebase';
import { FIREBASE_CONFIG } from '../config';

export const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.database();

import Chat from './chat/chat_index';
import Poll from './poll/poll_index';

export default () => {
  return (
    <div>
      <h1>Interactive Components</h1>
      <Chat />
      <Poll />
    </div>
  );
};
