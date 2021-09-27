// Import the functions you need from the SDKs you need
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBYJ1Hov7Wh2LtkCDiMFpx9ulS7dqMe74",
  authDomain: "clone-4e93a.firebaseapp.com",
  projectId: "clone-4e93a",
  storageBucket: "clone-4e93a.appspot.com",
  messagingSenderId: "1024327734530",
  appId: "1:1024327734530:web:d140ffa9d676a3f3761e1b",
  measurementId: "G-3JQ4L5ZJ94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();
const auth = getAuth();
auth.languageCode = 'fr';

export { auth, provider};

//My hosting URL : https://clone-4e93a.web.app/
