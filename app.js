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
        highEl.textContent = "High of:  " + data.main.temp_max + "°"
        lowEl.textContent = "Low of: " + data.main.temp_min + "°"
        windEl.textContent = "Wind Speed: " + Math.floor(data.wind.speed) + "MPH"
    }catch(error){
        console.log(error)
    }
}


btnEl.addEventListener("click", () => {
    getWeatherData(inputEl.value);
    document.querySelector('.temp-container').style.animation = "fadein 2s linear 1";
})


async function getHourlyWeather(city) {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=4&appid=3616a57498522c3f1df43d6caaa2c964`)
        console.log(response)
    }catch(error){
        console.log(error)
    }
}

getHourlyWeather("london")



// toggel degree sign to change to celsius 
//add changing weather image/background
// Logo for CSS on top corner(need grid?)
// text transition animations for when u change the city


