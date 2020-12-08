

// City search functionality for side bar
function onSearch() {
    // var cityName = input value from Search Bar

    // jQuery Ajax call to another server [request to get current weather data from API]
    var APIKey = "1676721fa532ea2e5a0ab18034cd5a47";
    var queryURL = "https://openweathermap.org/api/one-call-api";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        console.log(queryURL);
    })
    
    // getElementById [jumbotron elements for wind, etc]
    // insert into each element correct data from response
    //var array = getFromStorage("cityList")
    // array.push(cityName)
    // setInStorage("cityList", array)
}

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

