// ===============================
// Tasfia System V1.0
// admin.js
// User Roles Management
// ===============================


import { db } from "./firebase.js";


import {

collection,

getDocs,

doc,

updateDoc

} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";





// ===============================
// Load Users
// ===============================


async function loadUsers(){



try{


const snapshot =
await getDocs(
collection(db,"users")
);



const table =
document.getElementById(
"usersTable"
);



if(!table){

return;

}




table.innerHTML = "";




snapshot.forEach((item)=>{


const user =
item.data();



const row =
document.createElement(
"tr"
);



row.innerHTML = `

<td>
${user.name || ""}
</td>


<td>
${user.email || ""}
</td>


<td>
${user.role || "USER"}
</td>


<td>

<button onclick="changeRole('${item.id}')">

بدلون رول

</button>


</td>

`;



table.appendChild(row);



});



}catch(error){


console.error(
"Load Users Error:",
error
);


}



}





loadUsers();

// ===============================
// Change User Role
// ===============================


window.changeRole = async function(

userId

){



const newRole =
prompt(

"نوی رول ولیکئ: SUPER_ADMIN / ADMIN / USER"

);




if(!newRole){

return;

}





try{



await updateDoc(

doc(
db,
"users",
userId
),

{


role:

newRole



}


);





alert(

"رول په بریالیتوب بدل شو"

);




loadUsers();




}catch(error){



console.error(

"Role Update Error:",

error

);



alert(

"د رول بدلون کې ستونزه راغله"

);



}



};





// ===============================
// Permission Check
// ===============================


export function hasPermission(

role,

action

){



const permissions = {



SUPER_ADMIN:[

"CREATE",

"UPDATE",

"DELETE",

"MANAGE_USERS"

],



ADMIN:[

"CREATE",

"UPDATE"

],



USER:[

"SEARCH"

]



};




return permissions[role]?.includes(

action

);



}

// ===============================
// Admin Profile Information
// ===============================


const adminInfo = {


name:
"حافظ محیب الله (حافظ ایوب)",


phone:
"0705965475",


job:
"افسر سوانح – ۵۰۲ پیاده لواء"


};





export function getAdminInfo(){


return adminInfo;


}




// ===============================
// Protect Admin Page
// ===============================


export function checkAdminAccess(role){



if(

role !== "SUPER_ADMIN" &&

role !== "ADMIN"

){



alert(

"تاسو د دې برخې اجازه نه لرئ"

);



window.location.href =
"index.html";



return false;


}



return true;



}