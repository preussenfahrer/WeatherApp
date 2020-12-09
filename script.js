

$(document).ready(function () {
    
    // One Call API for weather data, make variable for user unique inputs
    var APIKey = "abc8e531b8c6f521bced71a3c720b1a7";
    var queryURL =  "https://api.openweathermap.org/data/2.5/onecall?appid=" + APIKey; 
    var currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?appid=" + APIKey;

    console.log($("search-bar"));
    $("#search-bar").click(citySearch)

    // search for city in side bar and get data in Console
    function citySearch(e) {
        console.log(e);
        if(e){
            e.preventDefault();
        }
        console.log("search button clicked")
        // button var
        var searchButton = $("<button>")
        // userInput
        var city = $("#search-input").val()

        // jQuery Ajax call to another server [request to get current weather data from API]
        $.ajax({
            url: currentWeatherURL + "&q=" + city,
            method: "GET",
        }).then(function (response) {
            console.log(response);
            // current weather call from API
            return $.ajax({
                url: queryURL + "&lat=" + response.coord.lat + "&lon=" + response.coord.lon,
                method: "GET",
            }).then(function(onecallresponse){
                console.log(onecallresponse);
                $("#city-name").text("Current City: " + onecallresponse.name)
                $("#temperature").text("Current Temperature: " + onecallresponse.current.temp);
                $("#humidity").text("Humidity: " + onecallresponse.current.humidity);
                $("#wind-speed").text("Wind Speed: " + onecallresponse.current.wind_speed);
                $("#uv-index").text("Current UV-Index: " + onecallresponse.current.uvi);
            })
        })

    }

    // getElementById [jumbotron elements for wind, etc]
    // insert into each element correct data from response
    //var array = getFromStorage("cityList")
    // array.push(cityName)
    // setInStorage("cityList", array)

    // Store previous searches in dropdown bar (should be local storage)
    function getFromStorage(key) {
        var data = window.localStorage.getItem(key);
        if (!data) {
            // Assumes array is stored in localStorage
            return [];
        } else {
            return JSON.parse(data);
        }
    }

    function setInStorage(key, value) {
        value = JSON.stringify(value);
        window.localStorage.setItem(key, value);
    }

})

// City search functionality for side bar


// example of calling localStorage and console.log localStorage
// $("#temperature").click(function(){
//     setInStorage("testKey", "testValue");
//     console.log(getFromStorage("testKey"))
// })
// console.log(getFromStorage("testKey"))

// Instructions
// GIVEN a weather dashboard with form inputs

// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

// WHEN I open the weather dashboard
// THEN I am presented with the last searched city forecast

