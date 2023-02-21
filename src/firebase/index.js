// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMX2o86vjz4t0_o5yzBAC3be4yvcYFosY",
  authDomain: "mejiasfirebase.firebaseapp.com",
  projectId: "mejiasfirebase",
  storageBucket: "mejiasfirebase.appspot.com",
  messagingSenderId: "186163636848",
  appId: "1:186163636848:web:b2eff6247b796bf2f162b5",
  measurementId: "G-HE38LXTCYT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}