// ===============================
// register.js
// Tasfia System V1.0
// ===============================

import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const form = document.getElementById("registerForm");

if (form) {
  
  form.addEventListener("submit", saveRecord);
  
}

async function saveRecord(e) {
    
    e.preventDefault();
    
    const idNumber =
      document.getElementById("idNumber").value.trim();
    
    const formNumber =
      document.getElementById("formNumber").value.trim();
    
    const formType =
      document.getElementById("formType").value;
    
    const name =
      document.getElementById("name").value.trim();
    
    const lastname =
      document.getElementById("lastname").value.trim();
    
    const father =
      document.getElementById("father").value.trim();
    
    const grandFather =
      document.getElementById("grandFather").value.trim();
    
    const birthDate =
      document.getElementById("birthDate").value;
    
    const age =
      document.getElementById("age").value;
    
    const tazkiraNumber =
      document.getElementById("tazkiraNumber").value.trim();
    
    const phoneNumber =
      document.getElementById("phoneNumber").value.trim();
    
    const tasfiaProvince =
      document.getElementById("tasfiaProvince").value;
    
    const originProvince =
      document.getElementById("originProvince").value.trim();
    
    const originDistrict =
      document.getElementById("originDistrict").value.trim();
    
    const originVillage =
      document.getElementById("originVillage").value.trim();
    
    const currentProvince =
      document.getElementById("currentProvince").value.trim();
    
    const currentDistrict =
      document.getElementById("currentDistrict").value.trim();
    
    const currentVillage =
      document.getElementById("currentVillage").value.trim();
    
    const job =
      document.getElementById("job").value.trim();
    
    const leaderName =
      document.getElementById("leaderName").value.trim();
    
    const leaderLastName =
      document.getElementById("leaderLastName").value.trim();
    
    const history =
      document.getElementById("history").value.trim();// ===============================
// Check Duplicate Form Number
// ===============================

const formQuery = query(
  collection(db, "records"),
  where("formNumber", "==", formNumber)
);

const formSnapshot = await getDocs(formQuery);

if (!formSnapshot.empty) {
  
  alert("❌ دا د فورمې نمبر مخکې ثبت شوی دی.");
  
  return;
  
}

// ===============================
// Check Duplicate Tazkira Number
// ===============================

const tazkiraQuery = query(
  collection(db, "records"),
  where("tazkiraNumber", "==", tazkiraNumber)
);

const tazkiraSnapshot = await getDocs(tazkiraQuery);

if (!tazkiraSnapshot.empty) {
  
  alert("❌ دا د تذکرې نمبر مخکې ثبت شوی دی.");
  
  return;
  
}

// ===============================
// Save Record
// ===============================

await addDoc(collection(db, "records"), {
  
  idNumber,
  
  formNumber,
  
  formType,
  
  name,
  
  lastname,
  
  father,
  
  grandFather,
  
  birthDate,
  
  age,
  
  tazkiraNumber,
  
  phoneNumber,
  
  tasfiaProvince,
  
  originProvince,
  
  originDistrict,
  
  originVillage,
  
  currentProvince,
  
  currentDistrict,
  
  currentVillage,
  
  job,
  
  leaderName,
  
  leaderLastName,
  
  history,
  
  createdAt: serverTimestamp(),
  
  status: "ACTIVE"
  
});

alert("✅ معلومات په بریالیتوب ثبت شول.");

form.reset();

location.reload();

}