import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

import firebase from 'firebase/app';

// get config from environment
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// init firebase
firebase.initializeApp(firebaseConfig);

// get firebase auth instance
const auth = firebase.auth();

// get firebase firestore instance
const db = firebase.firestore();

// get firebase storage
const storage = firebase.storage();

const arrayToUpdate = (value) => firebase.firestore.FieldValue.arrayUnion(value);

export { arrayToUpdate, auth, db, firebase as default, storage };
