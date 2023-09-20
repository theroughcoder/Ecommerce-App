// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpcnVAcrcLBLC5uwizAJU-3Cshzk9wTdY",
  authDomain: "buybusy-c985c.firebaseapp.com",
  projectId: "buybusy-c985c",
  storageBucket: "buybusy-c985c.appspot.com",
  messagingSenderId: "472686547239",
  appId: "1:472686547239:web:ecaa1f9df12dadce105902"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
