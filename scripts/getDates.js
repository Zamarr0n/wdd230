let olastModified = new Date(document.lastModified);
const lastModified = document.querySelector('#lastModified');
lastModified.textContent = olastModified;
const hamButton = document.querySelector("#menu")
const navigation = document.querySelector(".navigation");
const visits = document.getElementById("visits")

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

let numOfVisits = Number(localStorage.getItem('numOfVisit-ls'));

if (numOfVisits !== 0){
    visits.textContent = numOfVisits;
}else{
    visits.textContent = "Congrats you are the first visit 😁";
}

numOfVisits++;

localStorage.setItem('Number of visits:', visits);
