// (
// // const container = document.getElementById('container')
// // const search = document.getElementById('btn1')
// // const weatherBox = document.getElementById('weather-box')
// // const weatherDetails = document.getElementById('weather-details')

// // search.addEventListener('click', () => {
// //     const APIKey = "9b3b2620d0a854c5de8e6e0016258ec4";
// //     const city = document.getElementById('input').value;
// //     if (city === ""){ 
// //         return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {
// //             const image = document.getElementById('image')
// //             const temperature = document.getElementById('temperature')
// //             const description = document.getElementById('description')
// //             const humidity = document.getElementById('humidity span')
// //             const wind = document.getElementById('wind span')

// //             switch (json.weather[0].main) {
// //                 case 'Clear':
// //                     image.src = 'images/clear.png';
// //                     break;
// //                 case 'Rain':
// //                     image.src = 'images/rain.png';
// //                     break;
// //                 case 'Snow':
// //                     image.src = 'images/snow.png';
// //                     break;
// //                 case 'Cloud':
// //                     image.src = 'images/cloud.png';
// //                     break;
// //                 case 'Mist':
// //                     image.src = 'images/mist.png';
// //                     break;
// //                 case 'Haze':
// //                     image.src = 'images/mist.png';
// //                     break;
            
// //                 default:
// //                     image.src = 'images/cloud.png'
// //             }
// //         })
// //     }
// // }))
// )

const apiKey = "9b3b2620d0a854c5de8e6e0016258ec4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.getElementById('searchbox')
const button = document.getElementById('btn')
const weatherIcon = document.getElementById('weathericon')
const error404 = document.getElementById('not-found')
const wthr = document.getElementById('wthr')
const container = document.getElementById('container')
const box = document.getElementById('box')


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    if (response.status === 404) {
        error404.style.display= "flex"
        error404.classList.add= 'active'
        container.style.height = "420px"
        container.style.transition = 'height .7s ease'
        wthr.style.display = "none"
    } else{
        let data = await response.json()
        console.log(data);
        document.getElementById('description').innerHTML = data.weather[0].description
        document.getElementById('temperature').innerHTML = Math.round(data.main.temp) + "°c"
        document.getElementById('humi').innerHTML = data.main.humidity + "%"
        document.getElementById('win').innerHTML = data.wind.speed + " Km/h"
    
        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "images/cloud.png"
        } 
        else if(data.weather[0].main === "Clear") {
            weatherIcon.src = "images/clear.png"
        }
        else if(data.weather[0].main === "Rain") {
            weatherIcon.src = "images/rain.png"
        }
        else if(data.weather[0].main === "Drizzle") {
            weatherIcon.src = "images/drizzle.png"
        }
        else if(data.weather[0].main === "Haze") {
            weatherIcon.src = "images/mist.png"
        }
        else if(data.weather[0].main === "Mist") {
            weatherIcon.src = "images/mist.png"
        }
        else if(data.weather[0].main === "Snow") {
            weatherIcon.src = "images/snow.png"
        }
        wthr.style.display = 'block'
        container.style.height = '560px'
        container.style.transition = 'height .8s ease'
        error404.style.display = "none"
    }
    
}
if (searchbox.value === "") {
    searchbox.addEventListener('keyup', (e)=>{ 
        if (e.keyCode === 13) {
            checkWeather(searchbox.value)
        }})
    button.addEventListener('click', ()=>{ 
            checkWeather(searchbox.value)
    })
}


let time = new Date().getHours();
const greeting = document.getElementById('greet')
if (time < 5) {
    greeting.innerHTML = "Good Night";
} 
else if (time < 10) {
    greeting.innerHTML = "Good Morning";
} 
else if (time < 14) {
    greeting.innerHTML = "Good Noon";
} 
else if (time < 18) {
    greeting.innerHTML = "Good Afternoon";
} 
else if (time < 20) {
    greeting.innerHTML = "Good Evening";
} 
else {
    greeting.innerHTML = "Good Night";
}
