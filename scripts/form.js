const password1 = document.getElementById("pass-word");
const password2 = document.getElementById("pass-word-confirmation");
const message = document.getElementById("invalid-input");

const rangeValue = document.getElementById('rangeValue');
const range = document.getElementById("page-rating");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);


password2.addEventListener("focusout", checkpasswords);

function displayRatingValue(){
    rangeValue.innerHTML = range.value;
}
// CHECKING PASSWORDS 
function checkpasswords(){
    if(password1.value !== password2.value){
        // Do something
        message.textContent = "❌ Passwords doesn´t match";
        message.style.visibility = "show";
		password2.style.backgroundColor = "#fff0f3";
		password2.value = "";
		password2.focus();
    }else{
        message.textContent = ' '
    }
}


