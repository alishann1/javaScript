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


    // const res= true
// const p = new Promise(function(res , rej){
//     if(res){
//         res("yes")
//     }else{
//         rej("no!!!!!")
//     }
// })
// console.log(p)
// p.then((A)=>{
// console.log(A)
// })
// .catch((err)=>{
//     console.log(err)
// })

// const req = fetch("https://jsonplaceholder.typicode.com/users")
// req.then(function(data){
//     console.log(data)
//     if(data.ok){
//         return data.json()
//     }
// }).then((d)=>{
//     console.log(d)
// })
// .catch((err)=>{
//     console.log(err)
// })






// async ==> funtion
// async function hello(){
//     console.log("fsdfsd")
//     return 1
// }

// hello().then((data)=>{
//     console.log(data)
// })


// await 

// async function request(){
//   try {
//     const req= await fetch("https://jsonplaceholder.typicode.com/users")   
//     const res= await req.json()
//     console.log(res)
//   } catch (error) {
//     console.log(first)
//   }
// }

// request()







// async 
// console.log("start")
// function hello(){
//     console.log("hello world")
// }

// hello()


// console.log("end")




// intervals
// setTimeout()
// setInterval()
// console.log("start")

// const id  = setInterval(function hello(){
//     console.log("hello")
// } ,2000)

// clearInterval(id)


// console.log("end")





// promices 
// states 
// 3
// pending
// fulfiled 
// reject

// create karna 

// const isready =true
// const p = new Promise(function(resolve, reject){
//     if(isready){
//         resolve({age:21})
//     }else{
//         reject("sorry")
//     }
// })


// console.log(p)

// //consume karna 
// p.then(function(data){
//      console.log("then" , data)
//     //  return 12
// })
// .then((d)=>{
//     console.log(d)
//     return 1
// })
// .then((data)=>{
//   console.log(data)
// })
// .catch(function(error){
//     console.log(error)
// })

// // promise > then> p<resolve> 



// api



// fetch  >> promise 
const users =  document.querySelector(".users")

const request1 =  fetch("https://jsonplaceholder.typicode.com/users")
// console.log(request) 
// consume 


request1.then((data)=>{
   console.log("from thne "  , data)
//    return data
})




// async and await 



// async function heelo(){
//     console.log("hello")
//     return 1
// }   ///  promise return 


// const res= heelo()
// res.then((data)=>{
//     console.log(data)
// })


// await 


async function request(){
    const req =await fetch("https://jsonplaceholder.typicode.com/users")
    const data =  await req.json()
    console.log(data)
    data.forEach(user => {
          console.log(user.email)
          users.innerHTML += `
           <p class='para'>${user.email}</p>
          `
    });
}


request()