// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d16de.firebaseapp.com",
  projectId: "mern-blog-d16de",
  storageBucket: "mern-blog-d16de.firebasestorage.app",
  messagingSenderId: "1017988510",
  appId: "1:1017988510:web:cb58cc53fe8efc209bc28f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
