const API_KEY = "ef9090f8116615bff3f76e40f2c8ef0b";

function onGeoOk(info){
    const lat= info.coords.latitude;
    const lng = info.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json())
              .then((data) => {
                const weather = document.querySelector("#weather span:first-child");
                const city = document.querySelector("#weather span:last-child");
                city.innerText = data.name;
                weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("Cant't find you. No Weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk , onGeoError);