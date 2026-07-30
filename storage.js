// ==========================================
// Tasfia System V2.0
// Image Storage
// ==========================================

function imageToBase64(file) {
  
  return new Promise((resolve, reject) => {
    
    const reader = new FileReader();
    
    reader.onload = () => resolve(reader.result);
    
    reader.onerror = reject;
    
    reader.readAsDataURL(file);
    
  });
  
}

async function saveImages(record) {
  
  if (personImage.files.length) {
    
    record.personImage = await imageToBase64(personImage.files[0]);
    
  }
  
  if (idImage.files.length) {
    
    record.idImage = await imageToBase64(idImage.files[0]);
    
  }
  
  if (formImage.files.length) {
    
    record.formImage = await imageToBase64(formImage.files[0]);
    
  }
  
  return record;
  
}