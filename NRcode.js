const apiKey = "9b3b2620d0a854c5de8e6e0016258ec4";
const searchbox = document.getElementById("searchbox");
const button = document.getElementById("btn");
const weatherIcon = document.getElementById("weathericon");
const error404 = document.getElementById("not-found");
const wthr = document.getElementById("wthr");
const container = document.getElementById("container");
const box = document.getElementById("box");

/**
 * @param {string} city
 * @returns {Promise<void>}
 */
async function checkWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`
  );
  const is404 = response.status === 404;
  error404.style.display = is404 ? "flex" : "none";
  error404.classList.add = is404 ? "active" : "";
  container.style.height = is404 ? "420px" : "560px";
  container.style.transition = is404 ? "height .7s ease" : "height .8s ease";
  wthr.style.display = is404 ? "none" : "block";

  if (!is404) {
    const data = await response.json();
    document.getElementById("description").textContent =
      data.weather[0].description;
    document.getElementById("temperature").textContent = `${Math.round(
      data.main.temp
    )} °c`;
    document.getElementById("humi").textContent = `${data.main.humidity}%`;
    document.getElementById("win").textContent = `${data.wind.speed} Km/h`;

    const weather = {
      Clouds: "cloud.png",
      Clear: "clear.png",
      Rain: "rain.png",
      Drizzle: "drizzle.png",
      Haze: "mist.png",
      Mist: "mist.png",
      Snow: "snow.png",
    };
    weatherIcon.src = `images/${weather[data.weather[0].main]}`;
  }
}

searchbox.addEventListener("change", (e) => {
  if (e.target.value || e.code === "Enter") checkWeather(searchbox.value);
});

const time = new Date().getHours();
const greeting = document.getElementById("greet");
if (time < 5) greeting.innerHTML = "Good Night";
else if (time < 10) greeting.innerHTML = "Good Morning";
else if (time < 14) greeting.innerHTML = "Good Noon";
else if (time < 18) greeting.innerHTML = "Good Afternoon";
else if (time < 20) greeting.innerHTML = "Good Evening";
else greeting.innerHTML = "Good Night";
