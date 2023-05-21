const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a6bbc42ef5mshdd1f4812dc62175p1b0a64jsnc39b20198a83',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch(url + city,options).then(response => response.json()).then(response => {
        console.log(response)
        temp.innerHTML = response.temp 
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
    }).catch(err => console.error(err));
    document.body.style.background = "url('https://source.unsplash.com/random/1600x900/?" +city+ "/')";
}

getWeather("Chennai");

submit_search.addEventListener("click", (e) => {
    getWeather(city.value);
})

city.addEventListener("keyup", (e) => {
    if(e.key == "Enter") {
        getWeather(city.value);
    }
})

