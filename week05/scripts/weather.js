const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const figcaption = document.querySelector("figcaption");
const latitude = '49.75'; 
const longitude = '6.64';
const api_key = 'f4020f49719cc815617a223c13df5681';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=imperial`;

async function apiFetch(){
    try{
        const response = await fetch(url);
    if (response.ok){
        const data = await response.json();
        console.log(data);
        console.log(data.main.temp);
        console.log(data.weather[0].description);
        console.log(data.weather[0].icon);
        displayResults(data)
    }else{
        throw Error(await response.text());
    }
    } catch (error){
        console.log("error");
    }
}

function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp} &deg; F`;
    const iconsrc=`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description
    weatherIcon.setAttribute('src',iconsrc );
    weatherIcon.setAttribute('alt', desc);
    figcaption.textContent = `${desc}`;
}

apiFetch();

