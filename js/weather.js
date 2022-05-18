const API_KEY = "8ba1b1b7573e68d576a902baa5f0097f"
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const address = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(address)
    .then((response) => response.json())
    .then((data) =>{
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
       
        
    })
}


function onGeoError(){
    alert("Can't find you. No weather for you");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)