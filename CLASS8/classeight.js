const myVar = [1, 2, 3];
myVar = ["f"]
myVar = [323]


console.log(myVar)


{
    var a = 10

}


var a = 140
console.log(a)
// Global scope 


{
    var a = 10
}


function hello() {
    var a = 10
}


console.log(a)



{
    let a = 10
}

console.log | (a)




let a = 10   // global scope 
{
    {

        {

            {
                console.log(a);
            }
        }
    }
}






const c = 1000;

{
    const c = 100
    console.log(c)
}


function outerFunction() {
    const a = 1000;

}


function func2() {
    const a = 100;
    outerFunction()
}

console.log(m)
let m = 10
console.log(m)


// ____________________________________________

// Operators 
// Arithmetic operators 
// Logical operators 
// Conditional operators

// && And Operator
// ! NOT Operator
// = Assignment Operator
// == Equality Operator (Compares two values for equality after type conversion if necessary)
// === Strict Equality Operator (Compares two values for equality without type conversion )

var x = 10
var y = '10'

console.log(x === y)



// if else


    var age = 18;
var gender = "male"
if (age > 18 || gender === "male") {
    console.log("oky")

} else {
    console.log("sorry....")
}




if (age != 18) {
    console.log("oops!!!!!")
}




// if () {

// } else if () {

// } else if () {

// } else {

// }