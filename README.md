# Tofus-Weather

# Project Overview

## Project Name

Tofus Weather

## Project Description
This website will display your citys weather. You can search for your city name and the data for that city will show
## API and Data Sample

api.openweathermap.org/data/2.5/weather?q=London&appid=b560b632d8ded19319545ec4688b144f
```
{
  "coord": {
    "lon": -0.1257,
    "lat": 51.5085
  },
  "weather": [
    {
      "id": 804,
      "main": "Clouds",
      "description": "overcast clouds",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 289.42,
    "feels_like": 289.11,
    "temp_min": 288.87,
    "temp_max": 290.25,
    "pressure": 1027,
    "humidity": 77
  },
  "visibility": 10000,
  "wind": {
    "speed": 3.09,
    "deg": 360
  },
  "clouds": {
    "all": 90
  },
  "dt": 1630342205,
  "sys": {
    "type": 1,
    "id": 1414,
    "country": "GB",
    "sunrise": 1630300214,
    "sunset": 1630349546
  },
  "timezone": 3600,
  "id": 2643743,
  "name": "London",
  "cod": 200
}
```
## Wireframes

![markup (1)](https://user-images.githubusercontent.com/88213280/131382068-7c4cb9d2-e898-488b-8d2a-d48da4fb2516.jpg)

   Mobile smaller version
![tofu weaher mobile](https://user-images.githubusercontent.com/88213280/131391694-4ced8de0-7979-4292-a75e-80dae5228ba5.jpg)


### MVP/PostMVP


#### MVP 

- Use weather API to pull weather data

- Allow user to search city and displays the temperature 
- display "what it feels like" and the current temp
- displays a background of current weather 
#### PostMVP  

-somehow get the users current location and display that city(before they search) and display the cities next to them

-allow user to enter coordinates alongside city(and maybe more??)
## Priority Matrix

![Priority](https://user-images.githubusercontent.com/88213280/131408537-6cd8b2ea-a33b-4c93-8188-1c9736819f3e.jpg)



## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| ---- | :---: |  :---: | :---: | :---: |
| APi Storage and manipulation | H | 3hrs | 0 | 0 |
| setting up design | H | 2hr | 0 | 0s |
| event listners | H | 2hr | 0 | 0s |
| Display API data | H | 2hr | 0 | 0s |
| search Input | H | 2hr | 0 | 0s |
| Nav Bar | H | 2hr | 0 | 0s |
| main sections | H | 3hr | 0 | 0s |
| Bottom section/footer | H | 2hr | 0 | 0s |
| Api and Dom manipulation | H | 3hrs| 0 | 0 |
| Basic styling | H | 3hrs| 0 | 0 |
| CSS animations | H | 3hr | 0 | 0s |


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
