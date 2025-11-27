import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6p_hbrQKFB97fEFEG3CcpgGEQdlxQS5k",
  authDomain: "ygoappcardguesser.firebaseapp.com",
  projectId: "ygoappcardguesser",
  storageBucket: "ygoappcardguesser.firebasestorage.app",
  messagingSenderId: "790590916813",
  appId: "1:790590916813:web:03965eb51f5ce4479a0184"
};

// Initialize Firebase
export const fireBaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(fireBaseApp);
