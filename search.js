// ===============================
// search.js
// Tasfia System V1.0
// ===============================

import { db } from "./firebase.js";

import {
  collection,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const formBtn = document.getElementById("searchFormBtn");

if (formBtn) {
  
  formBtn.addEventListener("click", searchByForm);
  
}

async function searchByForm() {
    
    const formNumber = document
      .getElementById("searchFormNumber")
      .value
      .trim();
    
    if (formNumber === "") {
      
      alert("د فورمې نمبر ولیکئ.");
      
      return;
      
    }
    
    const q = query(
      
      collection(db, "records"),
      
      where("formNumber", "==", formNumber)
      
    );
    
    const snapshot = await getDocs(q);
    
    const result = document.getElementById("searchResult");
    
    const verify = document.getElementById("verifyMessage");
    
    if (snapshot.empty) {
      
      result.style.display = "block";
      
      verify.className = "fakeForm";
      
      verify.innerHTML = "❌ دا فورمه جعلي ده";
      
      document.getElementById("personInfo").style.display = "none";
      
      return;
      
    }
    
    const doc = snapshot.docs[0].data();
    
    result.style.display = "block";
    
    document.getElementById("personInfo").style.display = "block";
    
    verify.className = "realForm";
    
    verify.innerHTML = "✅ دا فورمه اصلي ده";document.getElementById("r_id").innerHTML = doc.idNumber;

document.getElementById("r_form").innerHTML = doc.formNumber;

document.getElementById("r_formType").innerHTML = doc.formType;

document.getElementById("r_name").innerHTML = doc.name;

document.getElementById("r_lastname").innerHTML = doc.lastname;

document.getElementById("r_father").innerHTML = doc.father;

document.getElementById("r_grandfather").innerHTML = doc.grandFather;

document.getElementById("r_age").innerHTML = doc.age;

document.getElementById("r_tazkira").innerHTML = doc.tazkiraNumber;

document.getElementById("r_phone").innerHTML = doc.phoneNumber;

document.getElementById("r_job").innerHTML = doc.job;

}// ===============================
// Search By Tazkira Number
// ===============================

const tazkiraBtn = document.getElementById("searchTazkiraBtn");

if (tazkiraBtn) {
  tazkiraBtn.addEventListener("click", searchByTazkira);
}

async function searchByTazkira() {
  
  const tazkira = document
    .getElementById("searchTazkiraNumber")
    .value
    .trim();
  
  if (tazkira === "") {
    alert("د تذکرې نمبر ولیکئ.");
    return;
  }
  
  const q = query(
    collection(db, "records"),
    where("tazkiraNumber", "==", tazkira)
  );
  
  const snapshot = await getDocs(q);
  
  if (snapshot.empty) {
    
    document.getElementById("searchResult").style.display = "block";
    document.getElementById("verifyMessage").className = "fakeForm";
    document.getElementById("verifyMessage").innerHTML = "❌ دا تذکره ثبت شوې نه ده";
    document.getElementById("personInfo").style.display = "none";
    
    return;
  }
  
  showRecord(snapshot.docs[0].data());
  
}

// ===============================
// Search By Phone Number
// ===============================

const phoneBtn = document.getElementById("searchPhoneBtn");

if (phoneBtn) {
  phoneBtn.addEventListener("click", searchByPhone);
}

async function searchByPhone() {
  
  const phone = document
    .getElementById("searchPhoneNumber")
    .value
    .trim();
  
  if (phone === "") {
    alert("د ټلیفون نمبر ولیکئ.");
    return;
  }
  
  const q = query(
    collection(db, "records"),
    where("phoneNumber", "==", phone)
  );
  
  const snapshot = await getDocs(q);
  
  if (snapshot.empty) {
    
    document.getElementById("searchResult").style.display = "block";
    document.getElementById("verifyMessage").className = "fakeForm";
    document.getElementById("verifyMessage").innerHTML = "❌ دا شمېره ثبت شوې نه ده";
    document.getElementById("personInfo").style.display = "none";
    
    return;
  }
  
  showRecord(snapshot.docs[0].data());
  
}

// ===============================
// Common Result Function
// ===============================

function showRecord(doc) {
  
  document.getElementById("searchResult").style.display = "block";
  
  document.getElementById("personInfo").style.display = "block";
  
  document.getElementById("verifyMessage").className = "realForm";
  
  document.getElementById("verifyMessage").innerHTML = "✅ معلومات وموندل شول";
  
  document.getElementById("r_id").innerHTML = doc.idNumber;
  document.getElementById("r_form").innerHTML = doc.formNumber;
  document.getElementById("r_formType").innerHTML = doc.formType;
  document.getElementById("r_name").innerHTML = doc.name;
  document.getElementById("r_lastname").innerHTML = doc.lastname;
  document.getElementById("r_father").innerHTML = doc.father;
  document.getElementById("r_grandfather").innerHTML = doc.grandFather;
  document.getElementById("r_age").innerHTML = doc.age;
  document.getElementById("r_tazkira").innerHTML = doc.tazkiraNumber;
  document.getElementById("r_phone").innerHTML = doc.phoneNumber;
  document.getElementById("r_job").innerHTML = doc.job;
  
}