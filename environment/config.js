import * as firebase from 'firebase';

// Initialize firebase
const firebaseConfig = {
    apiKey: "AIzaSyDQiVeL8ZTmJBTS78jBOUEO22E0F1jGmNQ",
    authDomain: "onneshon-cyberjon.firebaseapp.com",
    databaseURL: "https://onneshon-cyberjon.firebaseio.com",
    projectId: "onneshon-cyberjon",
    storageBucket: "onneshon-cyberjon.appspot.com",
    messagingSenderId: "515784709683",
    appId: "1:515784709683:web:a7df745604a9231be2f546"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebaseApp.auth();

