import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW8ORbwBeIQA48UXF02r7QuKJTKCCN1rY",
  authDomain: "imessage-8a531.firebaseapp.com",
  projectId: "imessage-8a531",
  storageBucket: "imessage-8a531.appspot.com",
  messagingSenderId: "1040557832216",
  appId: "1:1040557832216:web:f5277b995e41167bc3ab6d",
  measurementId: "G-V7WVX76ZM4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
