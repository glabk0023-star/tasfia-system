// ===============================
// auth.js
// Tasfia System
// ===============================

import { auth } from "./firebase.js";

import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

// ===============================
// Login
// ===============================

export async function login(email, password) {
    
    try {
        
        await signInWithEmailAndPassword(auth, email, password);
        
        alert("بریالۍ ننوتل");
        
        window.location.href = "index.html";
        
    } catch (error) {
        
        alert("بریښنالیک یا پټنوم ناسم دی.");
        
        console.error(error);
        
    }
    
}

// ===============================
// Logout
// ===============================

export async function logout() {
    
    await signOut(auth);
    
    window.location.href = "login.html";
    
}

// ===============================
// Check Login
// ===============================

onAuthStateChanged(auth, (user) => {
    
    if (user) {
        
        console.log("ننوتلی کاروونکی:", user.email);
        
    } else {
        
        console.log("هیڅ کاروونکی ننوتلی نه دی.");
        
    }
    
});