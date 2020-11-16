import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCAdauqhjeTq_UcoXJLFO08RUQO9gGqKGY',
  authDomain: 'instagram-clone-fb308.firebaseapp.com',
  databaseURL: 'https://instagram-clone-fb308.firebaseio.com',
  projectId: 'instagram-clone-fb308',
  storageBucket: 'instagram-clone-fb308.appspot.com',
  messagingSenderId: '20791727548',
  appId: '1:20791727548:web:b147a3e362ef911d88c7b9',
  measurementId: 'G-SZSSWVCB4L',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
