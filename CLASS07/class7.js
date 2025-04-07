console.log("start")
let user = { username: "Alex", age: "21", email: "abc@example.com" }

function hello({ username, age }) {
    console.log("Hello! My name is", username, "and I am", age, "years old.")
    console.log(username)
}
hello(user)
console.log("end")


// user 1 register

let [i1, i2] = ["apple", "orange"]

function items([item1, item2]) {
    console.log(item1, item2)
}

items(["apple", "orange"])
console.log("hello world")


function add(a = 0, b = 0) {
    return a + b
}


var res = add(21, 43)
console.log(res)


// Default Parameters
function chrome(user = "guest") {
    console.log(user, "mode")
}

chrome("ali")

// Rest Parameters

function hobbies(username, age, ...hobbies) {
    console.log(username, age, hobbies)
}

hobbies("Alex", 21, "swimming", "reading", "gaming")






// ______________________________

var age = 21;
var numericAge = String(age)
console.log(typeof numericAge)


// ___________________________


// String Concatenation

var str1 = "hello "
var str2 = "world"
var str3 = str1 + str2
console.log(str3)


//