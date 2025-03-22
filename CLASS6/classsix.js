// Array Destructuring

var myArray = ["apple", "mango", "grape", "banana"]

console.log(myArray)
myArray[0] = "zero"
console.log(myArray)

var item1 = myArray[0];
var item2 = myArray[1];
var item3 = myArray[2];
var item4 = myArray[3];

var [item1 , item2 , item3 , item4] = myArray 
console.log(item1 , item2 , item3 , item4 )
console.log(item4)


// Object Destructuring


var user = {
    name : "Ali",
    id : 5698,
    age : 21,
}

var {name:userName, id:userId, age:userAge} = user

console.log(userAge, userId)



//   Nested Destructuring 


var nested =
    [
        {
            userName: "John",
            id: 1234
        }
        ,

        {
            stdName: "Ali",
            stdId: 5698
        }
    ]

var myVar = nested[1].stdName
console.log(myVar)


var users = [
    {
        id: 2344,
        fullname: "John",
        age: 30,
        address: {
            city: "London",
            country: "UK"
        }
    }

]

var [{ address: { country: userCountry } }] = users
console.log(userCountry)

// ------------------------------------------------

// Function Declaration

function sum() {
    console.log(15 + 5)
    return [1, 2, 3]
}
var result = sum()
console.log(result)

// Function Expression

var divide = function (a, b) {
    return a / b;
}
console.log(divide(10,2))

// Arrow Function

var greet = (name) => {
    console.log("Hello", name)
}
greet("John!")

var add = (a, b) => {
    return a + b;
}
var res1 = add(50, 20)
var res2 = add(60, 30)
var res3 = add(70, 55)

console.log(res1, res2)