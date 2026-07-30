// ===============================
// Tasfia System V1.0
// dashboard.js
// Dashboard Statistics
// ===============================


import { db } from "./firebase.js";


import {

collection,

getDocs,

query,

where,

Timestamp

} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";




// ===============================
// Load Dashboard
// ===============================

async function loadDashboard(){



try {



const recordsSnapshot =
await getDocs(
collection(db,"records")
);



let total = 0;

let active = 0;

let deleted = 0;

let edited = 0;



const today =
new Date();


today.setHours(0,0,0,0);




recordsSnapshot.forEach((doc)=>{



const data =
doc.data();



total++;




if(data.status === "ACTIVE"){

active++;

}



if(data.status === "DELETED"){

deleted++;

}



if(data.updatedAt){

edited++;

}




});





// Total Records

const totalElement =
document.getElementById(
"totalRecords"
);



if(totalElement){

totalElement.innerHTML =
total;

}




// Active Records

const activeElement =
document.getElementById(
"activeRecords"
);



if(activeElement){

activeElement.innerHTML =
active;

}




// Deleted Records

const deletedElement =
document.getElementById(
"deletedRecords"
);



if(deletedElement){

deletedElement.innerHTML =
deleted;

}




// Edited Records

const editedElement =
document.getElementById(
"editedRecords"
);



if(editedElement){

editedElement.innerHTML =
edited;

}



}catch(error){


console.error(
"Dashboard Error:",
error
);


}


}



// Start

loadDashboard();

// ===============================
// Today Records
// ===============================

async function loadTodayRecords(){


try{


const todayStart =
new Date();


todayStart.setHours(
0,
0,
0,
0
);



const q =
query(

collection(db,"records"),

where(
"createdAt",
">=",
Timestamp.fromDate(todayStart)
)

);



const snapshot =
await getDocs(q);



const todayElement =
document.getElementById(
"todayRecords"
);



if(todayElement){


todayElement.innerHTML =
snapshot.size;


}



}catch(error){


console.error(
"Today Records Error:",
error
);


}


}





// ===============================
// Form Type Statistics
// ===============================

async function loadFormTypes(){


try{


const snapshot =
await getDocs(
collection(db,"records")
);



const types = {};



snapshot.forEach((doc)=>{


const type =
doc.data().formType || "نامعلوم";



if(types[type]){

types[type]++;

}else{

types[type]=1;

}



});



console.log(
"Form Types:",
types
);



}catch(error){


console.error(
"Form Type Error:",
error
);


}


}





// ===============================
// Province Statistics
// ===============================

async function loadProvinceStats(){


try{


const snapshot =
await getDocs(
collection(db,"records")
);



const provinces = {};



snapshot.forEach((doc)=>{


const province =
doc.data().tasfiaProvince || "نامعلوم";



if(provinces[province]){

provinces[province]++;

}else{

provinces[province]=1;

}



});



console.log(
"Province Stats:",
provinces
);



}catch(error){


console.error(
"Province Error:",
error
);


}


}





// ===============================
// Start Dashboard Services
// ===============================


loadTodayRecords();

loadFormTypes();

loadProvinceStats();

// ===============================
// Dashboard Refresh
// ===============================

export async function refreshDashboard(){


await loadDashboard();

await loadTodayRecords();

await loadFormTypes();

await loadProvinceStats();


}



// ===============================
// Auto Refresh
// ===============================

setInterval(()=>{


refreshDashboard();


},60000);