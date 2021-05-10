import firebase from "firebase";

const app = firebase.initializeApp({

    apiKey: "AIzaSyAPsM8nfreBH9HLZEnUFnVOrYEcAQvGQXM", //apiKey:process.env.apikey,
    authDomain: "the-bookclub-6d200.firebaseapp.com",
    projectId: "the-bookclub-6d200",
    storageBucket: "the-bookclub-6d200.appspot.com",
    messagingSenderId: "517824992374",
    appId: "1:517824992374:web:ab127cb573e342a68f3b57",
    measurementId: "G-E9FEW7049H"
    //https://firestore.googleapis.com/v1/projects/the-bookclub-6d200/databases/(default)/documents/readinglist

})

export default app;