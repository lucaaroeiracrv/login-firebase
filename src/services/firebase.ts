// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDhXlBPEP7b1RES4aDEOlVkBHgMxNDdro",
    authDomain: "login-f292e.firebaseapp.com",
    projectId: "login-f292e",
    storageBucket: "login-f292e.appspot.com",
    messagingSenderId: "79434895693",
    appId: "1:79434895693:web:008aae30e94a6d03712704"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Exporta a instância de autenticação
export const auth = getAuth(app);