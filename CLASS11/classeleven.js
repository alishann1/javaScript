// Ternary operator

var age = 21;
if (age > 18) {
    console.log("okay")
} else {
    console.log("not okay")
}

// Ternary operator can be used for a simple if else case in js.
var response = age > 18 && age < 30 ? "okay" : "not okay";
console.log(response)

//  Template literals
var fname = "alex";
var age =23

// var about = "My name is " + fname  + "." + "my age is " + age + " ."
var about = `My name is ${fname}. and my age is ${age}`
console.log(about)

// Switch case statement

var day = 5;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("invalid day number");
}



// ___________________________________

// Modulus
console.log(15%2)

console.log(2**3)


// var i  ;
// i= 0 
// var i =0
// loops
// for 


// increment / decrement 
var a = 10
// a = a + 12
a++
// console.log(a)





for(let i =0; i < 100 ; i=i+20 ){
   console.log(i)
}




// while loop

let i = 0

while(i<100){
    console.log(i)
    i+=2
}


// do while loop
let num =99 
do {
    console.log(i)
    i++
}while(i<100)




// 
var tableOf = 5

for(let i=1 ;  i<= 20 ; i++){
    console.log`(${tableOf} x ${i} =  ${tableOf*i})`
}




for(let  i =1   ; i < 5  ; i++ ){
   for (let j = 5 ;  i<=100 ; i++){
        console.log(j , i)
}

}





// 
let arr1 = ["apple" , "banana" , "mango" , "grapes"]
let arr = "Pakistan"
// arr[0]
// arr[1]
// arr[2]
for (let i = 0  ;  i<arr1.length ; i++){
    console.log(arr[i])
}



// for of loop and for in loop
let fruits = ["apple" , "banana" , "mango" , "grapes"]

for(let fruit of fruits){
    console.log(fruit)
}




// for in loop   <index>

for(let i in fruits){
    console.log(i, fruits[i])
}


for(let fruit of fruits){
    console.log(fruit)
}

// ___________________________________________________




((a)=>{
    console.log("hello from IIFE" , a);
})(21);





function hof(retFunc){
  return retFunc
}

var res= hof(function(){
    console.log("hello from return function")
})
res()






function hof(cb){
    cb()
}


hof(function(){
    console.log("hello from cb function")
})





tableOf = 5
i = 1
while (i <= 10) {
    console.log(`${tableOf} x ${i} = ${tableOf * i}`)
    i++;
}

do {
    console.log(`${tableOf} x ${i} = ${tableOf * i}`)
    i++;
}
while (i <= 10)

function hof(newFunc) {
    newFunc();
}

hof(function () {
    console.log("Higher Function")
})

function HOF(newFunc) {
    newFunc();
}

HOF(function () {
    console.log("Higher Function")
})



