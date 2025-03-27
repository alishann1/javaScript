console.log(this)

const userOne = {
    age: 21,
    about: () => {
        console.log(this)
    }
}

user.about()
function userProfile(date) {
    console.log(date, this.fname)
}

const user = {
    fname: "alex",
    age: 21,
    country: "USA",
    // profile:userProfile
}

userProfile.call(user, "21 july 2025")
userProfile.apply(user, ["21 july 2025"])
var a = userProfile.bind(user, "21 july 2025")
a()
user.profile()


// Higher order functions 

function sum(a) {
    a()
}
var res = sum(function () {
    console.log("inner func")
})
console.log(res)

function hof(a) {
    return a
}


var res = hof(function () {
    console.log("i am returning function")
})
console.log(res)

res()


// Strings methods

var fname = "alex-gilgit-pakistan";  // new String("Alex")
var fname = new String("Alex");
console.log(fname.toUpperCase())
var trimName = fname.trim()
console.log(trimName, trimName.length)
var search = fname.includes("a");
var slice = fname.slice(1, 3)
var ab = fname.split("-", 3)

var d = fname.indexOf("")
var e = fname.substring(0, 3)
console.log(e)

console.log(slice)
console.log(search)
console.log(fname.length)
console.log(fname[0])



var a = new Number(21)
console.log(a)


var a = [1]

var a = new Array(2, 3, 45)
console.log(a)