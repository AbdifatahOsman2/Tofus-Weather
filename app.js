const inputEl = document.querySelector(".input")
const cityName = document.querySelector(".city-name")
const tempEL = document.querySelector(".temperature")
const feelsEl = document.querySelector(".feels-like")
const highEl = document.querySelector(".high-temperature")
const lowEl = document.querySelector(".low-temperature")
const windEl = document.querySelector(".wind")
const btnEl = document.querySelector(".Button")

async function getWeatherData(city) {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b560b632d8ded19319545ec4688b144f&units=imperial`);
        document.querySelector('.temp-container').style.animation = "fadein 2s linear 1";
        const data = response.data;
        console.log(response)
        cityName.innerHTML = inputEl.value
        tempEL.textContent = data.main.temp + "°"
        feelsEl.textContent = "Feels Like: " + data.main.feels_like + "°"
        highEl.textContent = "High:  " + data.main.temp_max + "°"
        lowEl.textContent = "Low: " + data.main.temp_min + "°"
        windEl.textContent = "Wind: " + Math.floor(data.wind.speed) + "MPH"
    }catch(error){
        console.log(error)
    }
}


btnEl.addEventListener("click", () => {
    getWeatherData(inputEl.value);
    document.querySelector('.temp-container').style.animation = "fadein 2s linear 1";
})


const firstWeather = document.querySelector('.firstWeather')
const secondWeather = document.querySelector('.secondWeather')
const thirdWeather = document.querySelector('.thirdWeather')
const fourthWeather = document.querySelector('.fourthWeather')


navigator.geolocation.getCurrentPosition(getHourly)



async function getHourly(location) {
    try{
        const lat = location.coords.latitude
        const long = location.coords.longitude
        console.log(lat)
        const respnse = await axios.get(`https://api.weather.gov/gridpoints/TOP/${long},${lat}/forecast/hourly`)
        const weather = respnse.data.properties.periods
        console.log(respnse.data.properties)
        firstWeather.textContent += weather[0].temperature
        secondWeather.textContent += weather[1].temperature
        thirdWeather.textContent += weather[2].temperature
        fourthWeather.textContent += weather[3].temperature
    }catch(error){
        console.log(errror)
    }
}

getHourly(location)








// toggel degree sign to change to celsius 
//add changing weather image/background
// Logo for CSS on top corner(need grid?)
// text transition animations for when u change the city


