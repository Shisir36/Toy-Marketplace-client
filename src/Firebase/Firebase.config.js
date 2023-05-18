// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCXaJpaKjP1mMbuvdqPMtX-CRTXNbT_aA",
  authDomain: "toy-marketplace-d264c.firebaseapp.com",
  projectId: "toy-marketplace-d264c",
  storageBucket: "toy-marketplace-d264c.appspot.com",
  messagingSenderId: "528943113003",
  appId: "1:528943113003:web:f4bc9908ae30b7f35fdb6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app