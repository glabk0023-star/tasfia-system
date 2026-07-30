// ===============================
// Tasfia System V1.0
// app.js
// Main Application Controller
// ===============================


// ===============================
// Import Language System
// ===============================

import {
    initializeLanguage,
    setLanguage
} from "./settings/language.js";



// ===============================
// Page Controller
// ===============================

const pages = [

    "dashboardPage",
    "registerPage",
    "searchPage",
    "reportsPage",
    "adminPage",
    "settingsPage"

];



function showPage(pageID) {


    pages.forEach((page)=>{


        const element = document.getElementById(page);


        if(element){

            element.style.display =
            "none";

        }


    });



    const activePage =
    document.getElementById(pageID);



    if(activePage){

        activePage.style.display =
        "block";

    }

}



// ===============================
// Menu Buttons
// ===============================


const menuActions = {


    dashboardMenu:
    "dashboardPage",


    registerMenu:
    "registerPage",


    searchMenu:
    "searchPage",


    reportsMenu:
    "reportsPage",


    adminMenu:
    "adminPage",


    settingsMenu:
    "settingsPage"


};



Object.keys(menuActions).forEach((id)=>{


    const button =
    document.getElementById(id);



    if(button){


        button.addEventListener(
        "click",
        ()=>{

            showPage(
            menuActions[id]
            );

        });


    }


});



// ===============================
// Header Buttons
// ===============================


const homeBtn =
document.getElementById("homeBtn");


if(homeBtn){


homeBtn.onclick = ()=>{


    showPage(
    "dashboardPage"
    );


};


}



const backBtn =
document.getElementById("backBtn");


if(backBtn){


backBtn.onclick = ()=>{


    history.back();


};


}



const refreshBtn =
document.getElementById("refreshBtn");


if(refreshBtn){


refreshBtn.onclick = ()=>{


    location.reload();


};


}

// ===============================
// Logout Button
// ===============================

const logoutBtn =
document.getElementById("logoutBtn");


if(logoutBtn){


logoutBtn.onclick = ()=>{


    const confirmLogout =
    confirm("ایا غواړئ ووځئ؟");


    if(confirmLogout){


        window.location.href =
        "login.html";


    }


};


}




// ===============================
// Language Buttons
// ===============================


const languageBtn =
document.getElementById("languageBtn");


if(languageBtn){


languageBtn.onclick = ()=>{


    const lang =
    prompt(
    "ژبه انتخاب کړئ: ps, ar, fa, ur, en"
    );


    if(lang){


        setLanguage(lang);


        location.reload();


    }


};


}




// ===============================
// Current Date And Time
// ===============================


function updateDateTime(){


    const now =
    new Date();



    const date =
    document.getElementById(
    "currentDate"
    );


    const time =
    document.getElementById(
    "currentTime"
    );



    if(date){


        date.innerHTML =
        now.toLocaleDateString(
        "ps-AF"
        );


    }



    if(time){


        time.innerHTML =
        now.toLocaleTimeString(
        "ps-AF"
        );


    }


}



setInterval(
updateDateTime,
1000
);


updateDateTime();




// ===============================
// Start System
// ===============================


initializeLanguage();


showPage(
"dashboardPage"
);