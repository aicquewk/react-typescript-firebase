import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxoj-HXzYsnnG4_I0tLDhurKejtZy5CR0",
  authDomain: "react-typescript-firebas-d4fb4.firebaseapp.com",
  projectId: "react-typescript-firebas-d4fb4",
  storageBucket: "react-typescript-firebas-d4fb4.appspot.com",
  messagingSenderId: "825317621205",
  appId: "1:825317621205:web:983b288ddff0386b63915c"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export const auth = getAuth();

export const providers = {
    google: GoogleAuthProvider

}

export default firebase;