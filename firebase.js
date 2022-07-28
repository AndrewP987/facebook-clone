import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.GOOGLE_API_KEY,
  authDomain: 'facebook-clone-73c93.firebaseapp.com',
  projectId: 'facebook-clone-73c93',
  storageBucket: 'facebook-clone-73c93.appspot.com',
  messagingSenderId: '100756466698',
  appId: '1:100756466698:web:cd9f505eb4d87120e703f3',
  measurementId: 'G-VDJ6VV630H'
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
