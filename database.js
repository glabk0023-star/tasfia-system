// ==================================================
// Tasfia System V1.1
// Database Management
// ==================================================

let records = [];

let auditLogs = [];



// ================= LOAD =================

function loadLocal() {
    
    const data = localStorage.getItem("TasfiaRecords");
    
    if (data) {
        
        records = JSON.parse(data);
        
    }
    
}



// ================= SAVE =================

function saveLocal() {
    
    localStorage.setItem(
        
        "TasfiaRecords",
        
        JSON.stringify(records)
        
    );
    
}



// ================= ADD =================

function addRecord(record) {
    
    records.push(record);
    
    saveLocal();
    
    addAuditLog(
        
        "ثبت شو: " + record.formNumber
        
    );
    
    updateDashboard();
    
    updateAdminTable();
    
}



// ================= DELETE =================

function deleteRecord(id) {
    
    records = records.filter(
        
        item => item.id !== id
        
    );
    
    saveLocal();
    
    addAuditLog(
        
        "حذف شو: " + id
        
    );
    
    updateDashboard();
    
    updateAdminTable();
    
}



// ================= FIND BY ID =================

function getRecord(id) {
    
    return records.find(
        
        item => item.id === id
        
    );
    
}



// ================= FIND FORM =================

function findByFormNumber(number) {
    
    return records.find(
        
        item => item.formNumber === number
        
    );
    
}



// ================= FIND TAZKIRA =================

function findByTazkira(number) {
    
    return records.find(
        
        item => item.tazkira === number
        
    );
    
}



// ================= SEARCH =================

function searchRecord() {
    
    const formNumber =
        
        document.getElementById(
            
            "searchFormNumber"
            
        ).value.trim();
    
    
    
    const tazkira =
        
        document.getElementById(
            
            "searchTazkira"
            
        ).value.trim();
    
    
    
    const phone =
        
        document.getElementById(
            
            "searchPhone"
            
        ).value.trim();
    
    
    
    const result = records.find(
        
        item =>
        
        item.formNumber === formNumber ||
        
        item.tazkira === tazkira ||
        
        item.phone === phone
        
    );
    
    
    
    return result;
    
}



// ================= UPDATE =================

function updateRecord(id, newData) {
    
    const index = records.findIndex(
        
        item => item.id === id
        
    );
    
    
    
    if (index === -1) {
        
        return;
        
    }
    
    
    
    // ID نه بدلېږي
    
    newData.id = records[index].id;
    
    
    
    records[index] = newData;
    
    
    
    saveLocal();
    
    
    
    addAuditLog(
        
        "تغییر شو: " + id
        
    );
    
    
    
    updateDashboard();
    
    updateAdminTable();
    
}



// ================= BACKUP =================

function createBackup() {
    
    localStorage.setItem(
        
        "TasfiaBackup",
        
        JSON.stringify(records)
        
    );
    
    
    
    alert(
        
        "✅ Backup جوړ شو"
        
    );
    
}



// ================= AUDIT =================

function addAuditLog(action) {
    
    auditLogs.push({
        
        action,
        
        time: new Date().toLocaleString()
        
    });
    
}



// ================= START =================

document.addEventListener(
    
    "DOMContentLoaded",
    
    () => {
        
        loadLocal();
        
        updateDashboard();
        
        updateAdminTable();
        
    }
    
);