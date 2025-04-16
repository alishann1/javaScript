const key = "ad46c78af37eb445cc7acac962644a35"
const link = "https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}"

const cityName = document.getElementById("city");
const search = document.getElementById("search");
const temp = document.getElementById("temperature");


search.addEventListener("click",
    async function fetchWeather() {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${key}`)
            const data = await res.json()
            console.log(data)
            const temperature = data.main.temp;
            console.log("Temperature:", temperature);
            const t = temperature - 273.15
            temp.textContent = `Temperature: ${t.toFixed(1)} °C`;
        } catch (error) {
            console.log(error)
        }

    })