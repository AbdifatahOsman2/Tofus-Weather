# Tofus-Weather

# Project Overview

## Project Name

Tofus Weather

## Project Description
This website will display your citys weather. You can search for your city name and the data for that city will show
## API and Data Sample

api.openweathermap.org/data/2.5/weather?q=London&appid=b560b632d8ded19319545ec4688b144f

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

## Wireframes

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

### MVP/PostMVP


#### MVP 
-Will display the weather of what you search

#### PostMVP  

-somehow get the users current location and display that city(before they search) and display the cities next to them

## Priority Matrix

![markup (1)](https://user-images.githubusercontent.com/88213280/131382068-7c4cb9d2-e898-488b-8d2a-d48da4fb2516.jpg)

## Timeframes


	FIRST DAY: connect with API and manipulate DOM
	-connect API
	- see if i can display data
	-try and display data on the page
	-put what city the user searches on display

	Second Day: work on website layout
	-design the layout of page
	-add css effects

	 Third Day:Get the current Users location and display on page
-



## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
