const Apikey = "42c772d9d324807442938a13306214e5";
const apiURL =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const WeatherIcon = document.querySelector(".weather-icon");

async function chechWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${Apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }
    var data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°C ";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " % ";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h ";

    if (data.weather[0].main == "Clouds") {
        WeatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        WeatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
        WeatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        WeatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        WeatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Snow") {
        WeatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main == "Haze") {
        WeatherIcon.src = "images/clear.png";
    }


    document.querySelector(".weather").style.display = "block";
}


searchBtn.addEventListener("click", () => {
    chechWeather(searchBox.value);
});