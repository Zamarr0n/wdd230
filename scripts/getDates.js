// Today´s Date
const lastModified = document.querySelector('#lastModified');
const lastStamp = document.querySelector('#timeStamp');
var date = new Date(document.lastModified);
var day = String(date.getDate()).padStart(2, '0');
var month = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
var year = date.getFullYear();
date = month + '/' + day + '/' + year;
lastModified.textContent = date;
lastStamp.textContent = date
// Today´s Date

// navbar Code
const hamButton = document.querySelector("#menu")
const navigation = document.querySelector(".navigation");
const visits = document.getElementById("visits")

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

let numOfVisits = Number(localStorage.getItem('Number of visits:'));

if (numOfVisits !== 0){
    visits.textContent = numOfVisits;
}else{
    visits.textContent = "Congrats you are the first visit 😁";
}

numOfVisits++;

localStorage.setItem('Number of visits:', numOfVisits);
