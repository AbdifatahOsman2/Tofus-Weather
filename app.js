async function getWeatherData(city) {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b560b632d8ded19319545ec4688b144f`)
        console.log(response.data)
    }catch(error){
        console.log(error)
    }
}

getWeatherData("london")

async function showWeather() {
    
}