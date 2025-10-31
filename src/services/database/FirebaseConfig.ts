// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRy_4MU5_bsuKiCyRY8FBcmUcudbpRX1A",
  authDomain: "ror-server.firebaseapp.com",
  databaseURL: "https://ror-server-default-rtdb.firebaseio.com",
  projectId: "ror-server",
  storageBucket: "ror-server.firebasestorage.app",
  messagingSenderId: "469880511061",
  appId: "1:469880511061:web:f19f68ed3ed12bf98212dc",
  measurementId: "G-9BX6JSWN88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
