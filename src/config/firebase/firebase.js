import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase-firestore';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: 'AIzaSyDA9d0rjyB04Y1MfIM46p66x53Pc1YTl7c',
  authDomain: 'react-ecommerce-site.firebaseapp.com',
  databaseURL: 'https://react-ecommerce-site.firebaseio.com',
  projectId: 'react-ecommerce-site',
  storageBucket: 'react-ecommerce-site.appspot.com',
  messagingSenderId: '1017833816163',
  appId: '1:1017833816163:web:1430485971df36a64a7856',
  measurementId: 'G-QC9EXWNLXC',
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
