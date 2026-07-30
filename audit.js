// ===============================
// audit.js
// ===============================

import { db, auth } from "./firebase.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

export async function writeAudit(action, details = "") {
  
  try {
    
    const user = auth.currentUser;
    
    await addDoc(collection(db, "audit"), {
      
      action: action,
      
      details: details,
      
      email: user ? user.email : "Unknown",
      
      time: serverTimestamp()
      
    });
    
  } catch (error) {
    
    console.error(error);
    
  }
  
}