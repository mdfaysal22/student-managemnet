// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwUmgcE7MnAbMzIusp5a5bDnPqBbVY0qo",
  authDomain: "student-management-85f2b.firebaseapp.com",
  projectId: "student-management-85f2b",
  storageBucket: "student-management-85f2b.appspot.com",
  messagingSenderId: "1087107911729",
  appId: "1:1087107911729:web:331bce14a4fafa0171c510"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;