console.log("start")
var user = { username: "Alex", age: "21", email: "abc@example.com" }

function hello({ username, age }) {
    console.log("Hello!", username, "your age is", age)
    console.log(username)
}
console.log("end")
hello(user)


// user 1 register
var [i1, i2] = ["apple", "orange"]

function items([item1, item2]) {
    console.log(item1, item2)
}

items(["apple", "orange"])
console.log("hello world")


function divide(a=0, b=0){
    return a+b
}


var res= divide( 21,43)
console.log(res)



function chrome(user="guest"){
  console.log(user , "mode")
}

chrome("ali")


function hobbies(username ,  age  , ...hobbies){
    console.log(username, age , hobbies)
}

hobbies("ALex" , 21 , "swimming" , "reading" , "gaming")






// ______________________________

var age = 21;
var numericAge = String(age)
console.log(typeof numericAge)



___________________________


// string Concatenation

var str1 = "hello "
var str2 = "world"
var str3 = str1+ str2
console.log(str3)


//