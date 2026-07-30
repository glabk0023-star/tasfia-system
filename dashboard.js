// ===============================
// dashboard.js
// Tasfia System V1.0
// ===============================

import { db } from "./firebase.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

// Dashboard Statistics

async function loadDashboard() {
  
  try {
    
    const snapshot = await getDocs(collection(db, "records"));
    
    const total = snapshot.size;
    
    const totalBox = document.getElementById("totalRecords");
    
    if (totalBox) {
      
      totalBox.innerHTML = total;
      
    }
    
  } catch (error) {
    
    console.log(error);
    
  }
  
}

loadDashboard();

// Generate Auto ID

export function generateID() {
  
  const now = new Date();
  
  const year = now.getFullYear();
  
  const month = String(now.getMonth() + 1).padStart(2, "0");
  
  const day = String(now.getDate()).padStart(2, "0");
  
  const random = Math.floor(Math.random() * 9000) + 1000;
  
  return `TS-${year}${month}${day}-${random}`;
  
}

// Set Auto ID

const idInput = document.getElementById("idNumber");

if (idInput) {
  
  idInput.value = generateID();
  
}