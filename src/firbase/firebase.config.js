// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7w63j13pMNFVmZqhgsuhSjNZM6VPLiIg",
  authDomain: "event-management-5f92f.firebaseapp.com",
  projectId: "event-management-5f92f",
  storageBucket: "event-management-5f92f.appspot.com",
  messagingSenderId: "606668923256",
  appId: "1:606668923256:web:6d001a99926a33c14f288d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;