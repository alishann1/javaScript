var firstName  ="alex"

console.log(firstName)


let age = 21
hello("Pak" , "Gilgit");

const hello = function(country , city){
    var address = city +  country
    console.log(address)
    return address
}



// Spread operator in objects and Arrays

var a = [1, 2, 3]
var b = [...a]

/* Spread Operator is used to make a copy of array a in array b and when 
we make changes to array a, it does not effect b because it is stored with 
a different address.*/

a[0] = "added"
console.log("a ", a, "b", b)




// Use of Spread Operator to copy the key and value of an object into another object
var address = {
    address: "CANADA"
}

var user = {
    age: 21,
    firstName: "Alex",
    ...address
}

console.log(user)


// Spread operator is also used in nested in an object inside an array
const data  = {
    age:21
}

var a= ["a" , "b" , "c", {...data , city :"London"}]
console.log(a)




const user = {
    age: 21,
    num: [1, 2, 34]

}
var d = user.age        // 21 Datatype =  <number>
var total = d[0] + 3    // 1 + 3
var numb = user.num[0]  // [1,2,3 ]
total = numb + 3        // 1 + 3 = 4
console.log(total)      // 4




/* Inside node terminal the "This" operator shows empty but in browser
 "This" operator shows window object */

console.log(this)


const userData = {
    firstName: "Alex",
    age: 21,
    city: "Gilgit",
    status: "active",
    profile: function () {
        return () => {
            console.log("hello " + this.firstName)
        }
    }
}


const res = userData.profile("MORNING ")
res()