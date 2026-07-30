// ===============================
// app.js
// Tasfia System
// ===============================


// د ټولو پاڼو پټول
function hideAllPages() {
    
    const pages = document.querySelectorAll(".page");
    
    pages.forEach(page => {
        
        page.style.display = "none";
        
    });
    
}


// د یوې پاڼې ښکاره کول
function showPage(pageId) {
    
    hideAllPages();
    
    const page = document.getElementById(pageId);
    
    if (page) {
        
        page.style.display = "block";
        
    }
    
}



// ===============================
// Header Buttons
// ===============================


// کور
document.getElementById("homeBtn").onclick = () => {
    
    showPage("dashboardPage");
    
};



// شاته
document.getElementById("backBtn").onclick = () => {
    
    history.back();
    
};



// ریفریش
document.getElementById("refreshBtn").onclick = () => {
    
    location.reload();
    
};



// وتل
import { logout } from "./auth.js";


document.getElementById("logoutBtn").onclick = async () => {
    
    await logout();
    
};




// ===============================
// اصلي مینو
// ===============================


document.getElementById("dashboardMenu").onclick = () => {
    
    showPage("dashboardPage");
    
};



document.getElementById("registerMenu").onclick = () => {
    
    showPage("registerPage");
    
};



document.getElementById("searchMenu").onclick = () => {
    
    showPage("searchPage");
    
};



document.getElementById("reportsMenu").onclick = () => {
    
    showPage("reportsPage");
    
};



document.getElementById("adminMenu").onclick = () => {
    
    showPage("adminPage");
    
};



document.getElementById("settingsMenu").onclick = () => {
    
    showPage("settingsPage");
    
};





// ===============================
// ساعت او تاریخ
// ===============================


function updateClock() {
    
    
    const now = new Date();
    
    
    const date = document.getElementById("currentDate");
    
    const time = document.getElementById("currentTime");
    
    
    
    if (date) {
        
        date.innerHTML = now.toLocaleDateString("ps-AF");
        
    }
    
    
    
    if (time) {
        
        time.innerHTML = now.toLocaleTimeString("ps-AF");
        
    }
    
    
}



setInterval(updateClock, 1000);

updateClock();