import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCggzoNvq8JDqv1x1s0HpdEXxRUhxTNA78",
  authDomain: "attendance-db-e468b.firebaseapp.com",
  projectId: "attendance-db-e468b",
  storageBucket: "attendance-db-e468b.appspot.com",
  messagingSenderId: "721310414102",
  appId: "1:721310414102:web:ca0d5e82e7dd29751a0c37",
  measurementId: "G-DRTFTKBV7S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
