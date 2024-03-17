const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");


hamButton.addEventListener("click", () =>{
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
})

var date = new Date(document.lastModified);
var day = String(date.getDate()).padStart(2, '0');
var month = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
var year = date.getFullYear();
const last_date = document.querySelector("#lastModified");
const visit = document.getElementById("visit")
// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 84600000;

let visitsNum = Number(localStorage.getItem("visitsNum-ls"));

if(visitsNum == 0){ 
    visit.textContent = 'Welcome! Let us know if you have any questions😁.';
} else if(day < 1){

} 
else{
    visit.textContent = visitsNum;
}
visitsNum++;
localStorage.setItem('Number of visits:', visitsNum);
date = month + '/' + day + '/' + year;
last_date.textContent = date;
localStorage.setItem("Last-Seen", date);



