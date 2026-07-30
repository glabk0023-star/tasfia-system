// ===============================
// Tasfia System V1.0
// search.js
// Search Records
// ===============================


import { db } from "./firebase.js";


import {

collection,

query,

where,

getDocs

} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";




// ===============================
// Search By Form Number
// ===============================


const formSearchBtn =
document.getElementById(
"searchFormBtn"
);



if(formSearchBtn){


formSearchBtn.onclick =
async ()=>{


const formNumber =
document.getElementById(
"searchFormNumber"
).value.trim();



if(!formNumber){

alert(
"د فورم نمبر ولیکئ"
);

return;

}




await searchRecord(
"formNumber",
formNumber
);



};


}





// ===============================
// Search By Tazkira
// ===============================


const tazkiraSearchBtn =
document.getElementById(
"searchTazkiraBtn"
);



if(tazkiraSearchBtn){


tazkiraSearchBtn.onclick =
async ()=>{


const tazkira =
document.getElementById(
"searchTazkiraNumber"
).value.trim();




if(!tazkira){


alert(
"د تذکرې نمبر ولیکئ"
);


return;


}



await searchRecord(
"tazkiraNumber",
tazkira
);



};


}

// ===============================
// Search Function
// ===============================


async function searchRecord(
field,
value
){


try{


const q =
query(

collection(db,"records"),

where(
field,
"==",
value
)

);



const snapshot =
await getDocs(q);




const result =
document.getElementById(
"personInfo"
);



const verify =
document.getElementById(
"verifyMessage"
);




if(snapshot.empty){


if(verify){


verify.innerHTML =
"دا معلومات پیدا نه شول";


verify.className =
"fakeForm";


}



if(result){

result.style.display =
"none";

}


return;


}




snapshot.forEach((doc)=>{


const data =
doc.data();




if(verify){



if(data.status === "DELETED"){


verify.innerHTML =
"دا فورمه حذف شوې ده";


verify.className =
"fakeForm";



}else{


verify.innerHTML =
"دا فورمه اصلي ده";


verify.className =
"realForm";


}



}




if(result){


result.style.display =
"block";



document.getElementById(
"r_id"
).innerHTML =
doc.id;



document.getElementById(
"r_form"
).innerHTML =
data.formNumber || "";



document.getElementById(
"r_tazkira"
).innerHTML =
data.tazkiraNumber || "";



document.getElementById(
"r_name"
).innerHTML =
data.firstName || "";



document.getElementById(
"r_lastname"
).innerHTML =
data.lastName || "";



document.getElementById(
"r_father"
).innerHTML =
data.fatherName || "";



document.getElementById(
"r_grandfather"
).innerHTML =
data.grandFatherName || "";



document.getElementById(
"r_age"
).innerHTML =
data.age || "";



document.getElementById(
"r_job"
).innerHTML =
data.job || "";



}



});


}catch(error){


console.error(
"Search Error:",
error
);


alert(
"په لټون کې ستونزه راغله"
);


}


}

// ===============================
// Search Input Protection
// ===============================


const searchTazkiraInput =
document.getElementById(
"searchTazkiraNumber"
);



if(searchTazkiraInput){


searchTazkiraInput.addEventListener(
"input",
()=>{


searchTazkiraInput.value =
searchTazkiraInput.value.replace(
/[^0-9-]/g,
""
);


});


}





const searchFormInput =
document.getElementById(
"searchFormNumber"
);



if(searchFormInput){


searchFormInput.addEventListener(
"input",
()=>{


searchFormInput.value =
searchFormInput.value.replace(
/\s/g,
""
);


});


}





// ===============================
// Export Function
// ===============================


export {

searchRecord

};