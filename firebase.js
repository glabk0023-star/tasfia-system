// ===============================
// Firebase Config
// ===============================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const firebaseConfig = {
  
  apiKey: "AIzaSyCnnY5byLaGtqonN60Fp8QdEkdA5rGqblA",
  
  authDomain: "tasfiasystem.firebaseapp.com",
  
  projectId: "tasfiasystem",
  
  storageBucket: "tasfiasystem.firebasestorage.app",
  
  messagingSenderId: "224725945329",
  
  appId: "1:224725945329:web:4839131316cb579df61250",
  
  measurementId: "G-SEMQJD0P5C"
  
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Firestore

const db = getFirestore(app);

// Authentication

const auth = getAuth(app);

// Export

export {
  
  app,
  
  db,
  
  auth
  
};