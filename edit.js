// ===============================
// edit.js
// Tasfia System V1.0
// ===============================

import { db } from "./firebase.js";

import {
  doc,
  getDoc,
  updateDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

export async function loadRecord(id) {
  
  const ref = doc(db, "records", id);
  
  const snap = await getDoc(ref);
  
  if (!snap.exists()) {
    
    alert("ریکارډ ونه موندل شو");
    
    return;
    
  }
  
  const data = snap.data();
  
  document.getElementById("name").value = data.name;
  document.getElementById("lastname").value = data.lastname;
  document.getElementById("father").value = data.father;
  document.getElementById("phoneNumber").value = data.phoneNumber;
  
}

export async function updateRecord(id, data) {
  
  const ref = doc(db, "records", id);
  
  await updateDoc(ref, {
    
    ...data,
    
    updatedAt: serverTimestamp()
    
  });
  
  alert("✅ معلومات په بریالیتوب نوي شول.");
  
}