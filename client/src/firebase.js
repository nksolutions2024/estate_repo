// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-209d5.firebaseapp.com",
  projectId: "mern-estate-209d5",
  storageBucket: "mern-estate-209d5.appspot.com",
  messagingSenderId: "939652538548",
  appId: "1:939652538548:web:a85dc66218e7929e1d77e1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);