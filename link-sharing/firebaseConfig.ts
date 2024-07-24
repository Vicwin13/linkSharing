// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnjNQnyxpTOMFSGGErKQFk1TStdzZK13s",
  authDomain: "link-sharing-13.firebaseapp.com",
  projectId: "link-sharing-13",
  storageBucket: "link-sharing-13.appspot.com",
  messagingSenderId: "445641870087",
  appId: "1:445641870087:web:714e3ec0cfa3b8d0e1d3a2",
  measurementId: "G-W813PVTDJC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, auth, db, storage };
export default firebaseConfig;
