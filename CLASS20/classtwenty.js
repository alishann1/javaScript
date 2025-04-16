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

// // PROMISES
// let res= true
// const promise  =  new Promise((resolve, reject)=>{
//     if(res){
//         resolve("yummy")
//     }else{
//         reject("not yummy")
//     }
// })


// // promise.then(function(data){
// //     console.log(data)
// //     return data
// // }).then(function(data2){
// //     const res=  data2 + "food"
// //    promise.resolve(res)
// // }).then((data)=>{
// //     console.log(data)
// // })
// // .catch()



// const p = Promise.resolve("yummy");
// console.log(p)
const cards =  document.querySelector(".cards")
const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")

fetchUsers.then((data) =>{
//    console.log(data.json())
   return data.json()
}).then((data)=>{
   data.forEach(user => {
       console.log(user)
       cards.innerHTML +=`
       <div class="card">
        <div class="img-avatar">
          <img src="" alt="">
        </svg>
        </div>
        <div class="card-text">
          <div class="portada">
          
          </div>
          <div class="title-total">   
            <div class="title">${user.email}</div>
            <h2>${user.username}</h2>
        
        <div class="desc">${user.company.catchPhrase}</div>
        <div class="actions">
          <button><i class="far fa-heart"></i></button>
          <button><i class="far fa-envelope"></i></button>
          <button><i class="fas fa-user-friends"></i></button>
        </div></div>
       
        </div>
        
       
        
      </div>
       
       
       
       
       `
   });
})