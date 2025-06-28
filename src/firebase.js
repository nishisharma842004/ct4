import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA6urNVAAWzvFAcO09UoCioc-_ZlS5xwQw",
  authDomain: "progress-tractor.firebaseapp.com",
  projectId: "progress-tractor",
  storageBucket: "progress-tractor.firebasestorage.app",
  messagingSenderId: "848689410512",
  appId: "1:848689410512:web:307c4920924adf2850c9d5",
  measurementId: "G-GY8698NTW4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
