import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBsa2kUtS963Hgp16ildc9K9UZUHr-Czow",
  authDomain: "login-4a351.firebaseapp.com",
  projectId: "login-4a351",
  storageBucket: "login-4a351.appspot.com",
  messagingSenderId: "954442536289",
  appId: "1:954442536289:web:a83ee37a06e796cbd1a120",
  measurementId: "G-FC9X6PWK6D"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {Auth, signInWithEmailAndPassword}