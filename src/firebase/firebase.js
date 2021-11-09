// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQip3aW0iErFT-8K3XFP0w70cMpM4vk8w",
  authDomain: "apisigma-972b9.firebaseapp.com",
  projectId: "apisigma-972b9",
  storageBucket: "apisigma-972b9.appspot.com",
  messagingSenderId: "698730278235",
  appId: "1:698730278235:web:a4d6e1a1d4302e6d11be7e",
  measurementId: "G-1R3QFRB0ZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
export const storage = getStorage(app);