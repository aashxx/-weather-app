const weatherUrl = 'http://api.weatherapi.com/v1/current.json?key=e7854d004d164449b0e125022241011&aqi=no&q=';
const unsplashAccessKey = 'BsJWqrIHiShH-g_lintqWQ3jHsPOXd1wwcWdxgsZhmQ'; 
const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city;

    // Fetch weather data
    fetch(weatherUrl + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            temp.innerHTML = response.current.temp_c;
            humidity.innerHTML = response.current.humidity;
            min_temp.innerHTML = response.current.feelslike_c;
            max_temp.innerHTML = response.current.dewpoint_c;
            wind_speed.innerHTML = response.current.wind_kph;
        })
        .catch(err => console.error('Error fetching weather data:', err));

    const unsplashUrl = `https://api.unsplash.com/search/photos?query=${city}&client_id=${unsplashAccessKey}&orientation=landscape&per_page=1`;

    fetch(unsplashUrl)
        .then(response => response.json())
        .then(data => {
            if (data.results.length > 0) {
                const imageUrl = data.results[0].urls.regular;
                document.body.style.backgroundImage = `url('${imageUrl}')`;
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundPosition = "center";
            } else {
                console.error("No image found for the specified city.");
            }
        })
        .catch(error => console.error('Error fetching image from Unsplash:', error));
};

getWeather("Chennai");

submit_search.addEventListener("click", (e) => {
    getWeather(city.value);
});

city.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        getWeather(city.value);
    }
});