// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCVyHHn7chyayw0hmLd5M-j1CoJNCRv3RY",
  authDomain: "car-rent-bb8ae.firebaseapp.com",
  projectId: "car-rent-bb8ae",
  storageBucket: "car-rent-bb8ae.appspot.com",
  messagingSenderId: "711319944025",
  appId: "1:711319944025:web:4abf30221064c62058ea48",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
