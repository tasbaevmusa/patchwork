// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWGk24V_ZkiaTpv2HuiOF4e-NZwiL6JRU",
  authDomain: "patchwork-sewing.firebaseapp.com",
  projectId: "patchwork-sewing",
  storageBucket: "patchwork-sewing.appspot.com",
  messagingSenderId: "784315931461",
  appId: "1:784315931461:web:56dd191b3617749907fc2c",
  measurementId: "G-175GL848NN"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const storage=getStorage(app);
// const analytics = getAnalytics(app);