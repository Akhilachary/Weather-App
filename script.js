const apikey="5c534ccc4c20ed01f7e6316f7bb29b95";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let user_input=document.querySelector(".inputt input");
let btn=document.querySelector(".inputt button");
let img=document.querySelector(".weather-icon");
let weather=document.querySelector(".weather");

async function weatherData(city) {
    const response=await fetch(apiurl +city+ `&appid=${apikey}` );
    if(response.status==404){
        document.querySelector(".error").style.display="block"
        weather.style.display="none";
    }else{
        document.querySelector(".error").style.display="none"
        weather.style.display="block"
    const data=await response.json();
    console.log(data);

    document.querySelector('.temp').innerHTML=Math.round(data.main.temp) +`°C`;
    document.querySelector('.name').innerHTML=data.name;
    document.querySelector('.humidity').innerHTML=data.main.humidity+`%`;
    document.querySelector('.wind').innerHTML=data.wind.speed+`km/h`;

    if(data.weather[0].main=="Clear")
        img.src="images/clear.png";
    else if(data.weather[0].main=="Clouds")
        img.src="images/clouds.png";
    else if(data.weather[0].main=="Drizzle")
        img.src="images/drilezz.png";
    else if(data.weather[0].main=="Humidity")
        img.src="images/humidity.png";
    else if(data.weather[0].main=="Mist")
        img.src="images/mist.png";
    else if(data.weather[0].main=="Rain")
        img.src="images/rain.png";
    

    }
}

btn.addEventListener("click",()=>{
    weatherData(user_input.value);
    console.log(user_input.value);
})




