import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, getDocs, getDoc, doc, addDoc, setDoc, updateDoc, deleteDoc, query, where, Timestamp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD6B9x6lBKxQNlnSDWH8nOIEXcTx-Ir-lY",
  authDomain: "horapet-5bda1.firebaseapp.com",
  projectId: "horapet-5bda1",
  storageBucket: "horapet-5bda1.firebasestorage.app",
  messagingSenderId: "328205034638",
  appId: "1:328205034638:web:3e11d3f92045404d7795df",
  measurementId: "G-FB8EB0PRE6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, db, auth, googleProvider, collection, getDocs, getDoc, doc, addDoc, setDoc, updateDoc, deleteDoc, query, where, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged, updateProfile, Timestamp };
