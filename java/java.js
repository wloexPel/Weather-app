/*let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

let askCity = prompt("Enter your city");
askCity = askCity.toLowerCase();

if (weather[askCity] !== undefined) {
  let temperature = weather[askCity].temp;
  console.log(weather[askCity]);
  console.log(temperature);
  let celcius = Math.round(temperature);
  let farenheit = Math.round((temperature * 9) / 5 + 32);
  askCity = askCity.trim();
  alert(
    `It is currently ${celcius}°C (${farenheit}°F) in ${askCity} with a humidity of ${weather[askCity].humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${askCity}`
  );
}
*/
//debugger;
let now = new Date();
let setNewH2 = document.querySelector("h2");
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
setNewH2.innerHTML = `${day}, ${hours}:${minutes}`;

function findCityTemperature(event) {
  event.preventDefault();
  console.log(event);
  let searchInput = document.querySelector("#search-city");
  let newCity = document.querySelector("h1");
  newCity.innerHTML = `${searchInput.value}`;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", findCityTemperature);

function changeToFahrenheit(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temp");

  temperature.innerHTML = `19`;
}

function changeToCelcius(event, response) {
  event.preventDefault();
  let temperature = document.querySelector("#temp");
  let newTemperature = response.data.main.temp;
  console.log(newTemperature);
  temperature.innerHTML = newTemperature;
}

let tempCelcius = document.querySelector("#celcius");
let tempFahrenheit = document.querySelector("#fahrenheit");

tempCelcius.addEventListener("click", changeToFahrenheit);

tempFahrenheit.addEventListener("click", changeToCelcius);
function ShowCurrentPosition(position) {
  let searchInput = document.querySelector("#search-city");
  let city = searchInput.value;
  let latitude = position.coords.latitude;
  let longtitude = position.coords.longtitude;
  let part = "api.openweathermap.org/data/2.5/weather?";
  apiKey = "a969311cfcbb4a83dfad2cf7478397f9";
  let apiUrl = `https://${part}lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(changeToCelcius);
}
navigator.geolocation.getCurrentPosition(ShowCurrentPosition);
let findLocation = document.querySelector("button");
