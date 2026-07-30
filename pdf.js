// ===============================
// pdf.js
// Tasfia System V1.0
// ===============================

// Print Report

export function printRecord() {
  
  window.print();
  
}

// Export PDF

export function exportPDF() {
  
  alert("د PDF جوړولو برخه به د jsPDF کتابخانې سره فعاله شي.");
  
}

// Export Excel

export function exportExcel() {
  
  alert("د Excel جوړولو برخه به وروسته اضافه شي.");
  
}

// Backup

export function backupDatabase() {
  
  alert("یوازې Super Admin کولی شي Backup جوړ کړي.");
  
}

// Restore

export function restoreDatabase() {
  
  alert("یوازې Super Admin کولی شي Backup Restore کړي.");
  
}

// Version

export const systemVersion = "Tasfia System V1.0";