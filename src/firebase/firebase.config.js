// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALl7u2hO3Zo_sWUZjULDZujdbRkjFx45I",
  authDomain: "euro-explorer.firebaseapp.com",
  projectId: "euro-explorer",
  storageBucket: "euro-explorer.appspot.com",
  messagingSenderId: "370077668715",
  appId: "1:370077668715:web:c860c5a868e0a13775682e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;