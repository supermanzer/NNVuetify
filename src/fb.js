import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAOh3MhKf1F1U7AyKHHXJhy3hEf9fkCV_E",
    authDomain: "nn-todo-vuetify.firebaseapp.com",
    databaseURL: "https://nn-todo-vuetify.firebaseio.com",
    projectId: "nn-todo-vuetify",
    storageBucket: "nn-todo-vuetify.appspot.com",
    messagingSenderId: "576329976538",
    appId: "1:576329976538:web:69beba7016c7f46e8933e3",
    measurementId: "G-2HJZ8TTEE1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db