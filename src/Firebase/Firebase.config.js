// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyATSfp7gV855a5R3YxYQXDdYAm8OrCrQDk",
    authDomain: "book-buddies-website.firebaseapp.com",
    projectId: "book-buddies-website",
    storageBucket: "book-buddies-website.appspot.com",
    messagingSenderId: "90304931448",
    appId: "1:90304931448:web:dcd33237aeb71379a0ef8d",
    measurementId: "G-RB7R0XW110"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
const analytics = getAnalytics(app); 