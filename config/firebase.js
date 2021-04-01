import * as firebase from "firebase";
import { firebase } from './env'

const firebaseConfig = {
  apiKey: firebase.apiKey,
  authDomain: firebase.authDomain,
  projectId: firebase.projectId,
  storageBucket: firebase.storageBucket,
  messagingSenderId: firebase.messagingSenderId,
  appId: firebase.appId,
  measurementId: firebase.measurementId
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;