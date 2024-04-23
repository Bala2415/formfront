// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA84ATo76BM_rG4169hEgeKPdZaHoru498",
  authDomain: "myproject-98335.firebaseapp.com",
  projectId: "myproject-98335",
  storageBucket: "myproject-98335.appspot.com",
  messagingSenderId: "802705901052",
  appId: "1:802705901052:web:7360ef7ac8e1e3731b5e79",
  measurementId: "G-B9EGLCC5RH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth
