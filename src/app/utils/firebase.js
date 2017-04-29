import firebase from 'firebase';
import { FIREBASE_CONFIG } from '../config';

export const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.database();

const FireBaseTools = {
    setPoll: (poll) => firebaseDb.ref('poll')
    .set({
      poll,
      createdAt: firebase.database.ServerValue.TIMESTAMP
    }).then(error => ({
        errorCode: error.code,
        errorMessage: error.message,
    })),

    getMessages: (path) => firebaseDb.ref(path).on('value', snapshot => {
      const messages = snapshot.val();
      return messages
    }),

    sendMessage: (uid, displayName, message) => firebaseDb.ref('messages')
    .push({
      uid,
      displayName,
      message,
      createdAt: firebase.database.ServerValue.TIMESTAMP
    }).then(error => ({
        errorCode: error.code,
        errorMessage: error.message,
    })),

    setMessage: (uid, displayName, message) => firebaseDb.ref('messages')
    .set({
      uid,
      displayName,
      message,
      createdAt: firebase.database.ServerValue.TIMESTAMP
    }).then(error => ({
        errorCode: error.code,
        errorMessage: error.message,
    })),
};

export default FireBaseTools;
