// ===============================
// Tasfia System V1.0
// register.js
// Register New Record
// ===============================


import { db } from "./firebase.js";


import {

collection,

addDoc,

getDocs,

query,

where,

serverTimestamp

} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";





// ===============================
// Register Form
// ===============================


const registerForm =
document.getElementById("registerForm");




if(registerForm){



registerForm.addEventListener(
"submit",
async(e)=>{


e.preventDefault();




try{



const formNumber =
document.getElementById(
"formNumber"
).value.trim();




const tazkira =
document.getElementById(
"tazkiraNumber"
).value.trim();





// Check Duplicate Form Number


const checkForm =
query(

collection(db,"records"),

where(
"formNumber",
"==",
formNumber
)

);



const formSnapshot =
await getDocs(checkForm);




if(!formSnapshot.empty){


alert(
"دا فورم نمبر مخکې ثبت شوی دی"
);


return;


}





// Check Tazkira Format


const tazkiraPattern =
/^\d{4}-\d{4}-\d{5}$/;




if(!tazkiraPattern.test(tazkira)){


alert(
"د تذکرې نمبر سم فارمیټ نه لري"
);


return;


}

// ===============================
// Collect Form Data
// ===============================


const data = {


formNumber: formNumber,


tazkiraNumber: tazkira,


firstName:
document.getElementById(
"firstName"
).value.trim(),


lastName:
document.getElementById(
"lastName"
).value.trim(),


fatherName:
document.getElementById(
"fatherName"
).value.trim(),


grandFatherName:
document.getElementById(
"grandFatherName"
).value.trim(),


birthDate:
document.getElementById(
"birthDate"
).value,


age:
Number(
document.getElementById(
"age"
).value
),


tasfiaProvince:
document.getElementById(
"tasfiaProvince"
).value,



phone:
document.getElementById(
"phone"
)?.value || "",



job:
document.getElementById(
"job"
)?.value || "",



jihadiHistory:
document.getElementById(
"jihadiHistory"
)?.value || "",



status:
"ACTIVE",



createdAt:
serverTimestamp(),



updatedAt:
null



};





// ===============================
// Save To Firestore
// ===============================


const docRef =
await addDoc(

collection(
db,
"records"
),

data

);





alert(
"معلومات په بریالیتوب ثبت شوې"
);



registerForm.reset();




}catch(error){



console.error(
"Register Error:",
error
);



alert(
"ثبت کې ستونزه راغله"
);



}



});


}

// ===============================
// Input Validation Helpers
// ===============================


const ageInput =
document.getElementById("age");


if(ageInput){


ageInput.addEventListener(
"input",
()=>{


ageInput.value =
ageInput.value.replace(
/[^0-9]/g,
""
);


});


}





const formNumberInput =
document.getElementById(
"formNumber"
);



if(formNumberInput){


formNumberInput.addEventListener(
"input",
()=>{


formNumberInput.value =
formNumberInput.value.replace(
/\s/g,
""
);


});


}





const tazkiraInput =
document.getElementById(
"tazkiraNumber"
);



if(tazkiraInput){


tazkiraInput.addEventListener(
"input",
()=>{


tazkiraInput.value =
tazkiraInput.value.replace(
/[^0-9-]/g,
""
);


});


}