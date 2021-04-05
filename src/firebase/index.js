import firebase from 'firebase/app';
import 'firebase/storage';
var firebaseConfig = {
    apiKey: "AIzaSyDkUBYXUML7I-sAVuIHEqSsN8971kD9Jek",
    authDomain: "e-commerce-project-6ced1.firebaseapp.com",
    projectId: "e-commerce-project-6ced1",
    storageBucket: "e-commerce-project-6ced1.appspot.com",
    messagingSenderId: "1078246317394",
    appId: "1:1078246317394:web:a3593532ca04d0576dee8b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export {
    storage, firebase as default
}