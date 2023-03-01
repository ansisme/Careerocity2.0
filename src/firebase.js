// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app"; //extra
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDPH79bxAe0KaSP7KBs8dkRY9oQGK8DrrY",
    authDomain: "careerocity-2f25a.firebaseapp.com",
    projectId: "careerocity-2f25a",
    storageBucket: "careerocity-2f25a.appspot.com",
    messagingSenderId: "637364853208",
    appId: "1:637364853208:web:84b0994814c4d482533aad",
    measurementId: "G-PTCXLLX3YT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
//email/password provider
const emailProvider = new EmailAuthProvider();
//google provider
const googleProvider = new GoogleAuthProvider();
//exporting all
export { auth, emailProvider, googleProvider }