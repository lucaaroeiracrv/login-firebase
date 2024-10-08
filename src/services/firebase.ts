// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1Cp-sz55kHwtHlT_HpIs8bHGc0nXvepY",
  authDomain: "projeto1-6e72d.firebaseapp.com",
  projectId: "projeto1-6e72d",
  storageBucket: "projeto1-6e72d.appspot.com",
  messagingSenderId: "463077655804",
  appId: "1:463077655804:web:657d797d34dbd2ab570379",
  measurementId: "G-3GCWC6FF9D"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Exporta a instância de autenticação
export const auth = getAuth(app);

  // Exporta a instância de Firestore
export const db = getFirestore(app);