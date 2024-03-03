let olastModified = new Date(document.lastModified);
const lastModified = document.querySelector('#lastModified');

lastModified.textContent=olastModified; 
console.log(olastModified);