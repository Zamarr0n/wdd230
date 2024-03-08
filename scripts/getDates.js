let olastModified = new Date(document.lastModified);
const lastModified = document.querySelector('#lastModified');
lastModified.textContent = olastModified;
const hamButton = document.querySelector("#menu")
const navigation = document.querySelector(".navigation");

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
