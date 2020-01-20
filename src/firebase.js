import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = firebase.InitializeApp({
    apiKey: "AIzaSyBZxN6eogWYUBGhQYgvAyFvsCNhecYdwjE",
    authDomain: "todoist-tut-fcb40.firebaseapp.com",
    databaseURL: "https://todoist-tut-fcb40.firebaseio.com",
    projectId: "todoist-tut-fcb40",
    storageBucket: "todoist-tut-fcb40.appspot.com",
    messagingSenderId: "749889997590",
    appId: "1:749889997590:web:b7883d75661295d80d9e37"
});

export { firebaseConfig as firebase };