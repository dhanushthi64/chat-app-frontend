// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQbGQmJLKnO6L6lbg9IyP_gqMH2dItLkk",
  authDomain: "godzilla-ec845.firebaseapp.com",
  projectId: "godzilla-ec845",
  storageBucket: "godzilla-ec845.appspot.com",
  messagingSenderId: "4066600601",
  appId: "1:4066600601:web:dede7ddbe4d4675b08fa08"
};




// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db=getFirestore();