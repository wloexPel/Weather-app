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

function changeCharacteristics(response) {
  let newCity = document.querySelector("h1");
  newCity.innerHTML = response.data.name;
  let temperature = document.querySelector("#temp");
  let humidity = document.querySelector("#hum");
  let windSpeed = document.querySelector("#wind");
  let newTemperature = Math.round(response.data.main.temp);
  let newHumidity = response.data.main.humidity;
  let newWindSpeed = Math.round(response.data.wind.speed);
  temperature.innerHTML = newTemperature;
  humidity.innerHTML = newHumidity;
  windSpeed.innerHTML = newWindSpeed;
}

let tempCelcius = document.querySelector("#celcius");
tempCelcius.addEventListener("click", changeCharacteristics);
function findCity(event) {
  event.preventDefault();
  apiKey = "c4e99232a0e329fb97c895f641defe02";
  let searchInput = document.querySelector("#search-city");
  let city = searchInput.value;
  let part = "api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `https://${part}q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(changeCharacteristics);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", findCity);

function searchLocation(position) {
  apiKey = "c4e99232a0e329fb97c895f641defe02";
  let part = "api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `https://${part}lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  alert(
    `latitude: ${position.coords.latitude}, longitude:${position.coords.longitude}`
  );
  axios.get(apiUrl).then(changeCharacteristics);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
let location1 = document.querySelector("#location1");
location1.addEventListener("click", getCurrentLocation);
