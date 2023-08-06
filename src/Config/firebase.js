// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI3JpqvbWT72HdZ8DW9u20EqZ0E6HtaRg",
  authDomain: "pass-on-2b67d.firebaseapp.com",
  projectId: "pass-on-2b67d",
  storageBucket: "pass-on-2b67d.appspot.com",
  messagingSenderId: "1059365781715",
  appId: "1:1059365781715:web:53726a116d330d05461426",
  measurementId: "G-7BLPHBS5Y6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();


// const analytics = getAnalytics(app);