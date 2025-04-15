const key = "ad46c78af37eb445cc7acac962644a35"
const link = "https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}"
const temp = document.getElementById("temperature")
const cityVal = document.getElementById("cityName")
const countryVal = document.getElementById("country")
const cityName = document.getElementById("city");
const search = document.getElementById("search");

function fetchWeather(cityName) {
    const req = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`

    );

    return req;
}
search.addEventListener("click", () => {
    fetchWeather(cityName.value)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data)
            const temperature = data.main.temp;
            console.log("Temperature:", temperature);
            const t = temperature - 273.15
            temp.textContent = `Temperature: ${t.toFixed(1)} °C`;

            const city = data.name;
            console.log("City:", city);
            cityVal.textContent = `City: ${city}`;

            const country = data.sys.country;
            console.log("Country:", country);
            countryVal.textContent = `Country: ${country}`;
        })
        .catch((error) => {
            console.log(error)
        })
})

