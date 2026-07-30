// ===============================
// Tasfia System V1.0
// audit.js
// Activity Tracking System
// ===============================


import { db } from "./firebase.js";


import {

collection,

addDoc,

serverTimestamp

} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";




// ===============================
// Add Audit Log
// ===============================


export async function addAuditLog(

action,

recordId,

details

){



try{


await addDoc(

collection(
db,
"auditLogs"
),

{


action:

action,



recordId:

recordId,



details:

details,



createdAt:

serverTimestamp()



}


);



}catch(error){


console.error(

"Audit Error:",

error

);


}


}

// ===============================
// Audit Actions
// ===============================



export async function logCreate(

recordId

){


await addAuditLog(

"CREATE",

recordId,

"نوی ریکارډ ثبت شو"

);


}





export async function logUpdate(

recordId,

details

){


await addAuditLog(

"UPDATE",

recordId,

details

);


}





export async function logDelete(

recordId,

details

){


await addAuditLog(

"DELETE",

recordId,

details

);


}

// ===============================
// Get User Information
// ===============================


export function getCurrentUserInfo(){


const user = 
localStorage.getItem(
"currentUser"
);



if(user){


return user;


}



return "Unknown User";


}




// ===============================
// Create Detailed Log
// ===============================


export async function createDetailedLog(

action,

recordId,

oldData,

newData

){



const user =
getCurrentUserInfo();




const details = {


user:

user,



oldData:

oldData,



newData:

newData



};




await addAuditLog(

action,

recordId,

details

);



}
