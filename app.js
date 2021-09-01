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
        const data = response.data;
        console.log(response.data)
        cityName.innerHTML = inputEl.value
        tempEL.textContent = data.main.temp + "°"
        feelsEl.textContent = "Feels Like: " + data.main.feels_like
        highEl.textContent = "High of:  " + data.main.temp_max
        lowEl.textContent = "Low of: " + data.main.temp_min
        windEl.textContent = "Wind Speed: " + Math.floor(data.wind.speed) + "MPH"
    }catch(error){
        console.log(error)
    }
}


btnEl.addEventListener("click", () => {

    getWeatherData(inputEl.value);
})
