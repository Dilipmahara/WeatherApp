const apikey ="a0b9782ed5e865d13a53bfda6bf40d3c";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const WeatherIcon=document.querySelector(".Weather-icon");


async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();

//error

    if(response.status ==404)
    {
        document.querySelector(".error").style.display="block";
        document.querySelector(".Weather").style.display="none";

    }
    else
    {
        
document.querySelector(".city").innerHTML =data.name;
document.querySelector(".temp").innerHTML =Math.round(data.main.temp)+"°c";
document.querySelector(".humidity").innerHTML =data.main.humidity+ "%";
document.querySelector(".wind").innerHTML =data.wind.speed+ " km/hr";

if(data.weather[0].main =="Clouds"){
    WeatherIcon.src ="images/images/clouds.png";
}
else if(data.weather[0].main =="Clear"){
    WeatherIcon.src ="images/images/clear.png";
}
else if(data.weather[0].main =="Rain"){
    WeatherIcon.src ="images/images/rain.png";

}
else if(data.weather[0].main =="Drizzle"){
    WeatherIcon.src ="images/images/drizzle.png";
}
else if(data.weather[0].main =="Mist"){
    WeatherIcon.src ="images/images/mist.png";
}
document.querySelector(".Weather").style.display="block";
document.querySelector(".error").style.display="none";
}

    }
//This line adds an event listener to the search button. 
//The event listener is triggered when the button is clicked.
searchBtn.addEventListener("click", ()=>{
//checkWeather(searchBox.value);: When the button is clicked, it calls the 
//checkWeather function, passing the value entered in the search box as the city parameter.
    checkWeather(searchBox.value);
})