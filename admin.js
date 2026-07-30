// ===============================
// admin.js
// Tasfia System V1.0
// ===============================

import { db } from "./firebase.js";

import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    updateDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

// ===============================
// Load All Admins
// ===============================

export async function loadAdmins() {
    
    const snapshot = await getDocs(collection(db, "admins"));
    
    const table = document.getElementById("adminTable");
    
    if (!table) return;
    
    table.innerHTML = "";
    
    snapshot.forEach((item) => {
        
        const data = item.data();
        
        table.innerHTML += `

<tr>

<td>${data.name}</td>

<td>${data.email}</td>

<td>${data.role}</td>

<td>${data.status}</td>

<td>

<button onclick="disableAdmin('${item.id}')">

بند

</button>

<button onclick="removeAdmin('${item.id}')">

حذف

</button>

</td>

</tr>

`;
        
    });
    
}// ===============================
// Add Admin
// ===============================

export async function addAdmin(name, email) {
    
    await addDoc(collection(db, "admins"), {
        
        name,
        
        email,
        
        role: "ADMIN",
        
        status: "ACTIVE",
        
        createdAt: serverTimestamp()
        
    });
    
    alert("✅ نوی Admin جوړ شو.");
    
    loadAdmins();
    
}

// ===============================
// Disable Admin
// ===============================

window.disableAdmin = async function(id) {
    
    await updateDoc(doc(db, "admins", id), {
        
        status: "DISABLED"
        
    });
    
    alert("Admin بند شو.");
    
    loadAdmins();
    
}

// ===============================
// Delete Admin
// ===============================

window.removeAdmin = async function(id) {
    
    if (!confirm("ایا حذف یې کړئ؟")) return;
    
    await deleteDoc(doc(db, "admins", id));
    
    alert("Admin حذف شو.");
    
    loadAdmins();
    
}

loadAdmins();