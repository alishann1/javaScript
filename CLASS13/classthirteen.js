// objects 

// The code below is not optimized properly because it is not efficient and the function
// will be called each time a user is created.

let userOne = {
    fname: "alex",
    age: 21,
    city: "gilgit",
    status: "active",
    profile: function () {
        console.log("hello " + this.fname)
    }
}




// step two

// This code is one step optimized as it won't run the function every time 
// a user is created but it is still not optimized enough incase we add more methods in the object

function profile() {
    console.log("hello " + this.fname)
}
let userTwo = {
    fname: "Alex",
    age: 21,
    city: "Gilgit",
    status: "active",
    profile: profile
}




// step 3 

// This code is one step more optimized as it has arranged multiple methods inside an object
// but still we need to add a method in both the objects and add the key and value

var userMethods = {
    profile: function () {
        console.log("hello " + this.fname)
    },
    changeName: function (newName) {
        this.fname = newName
    },
    changeAge: function (newAge) {
        this.age = newAge
    }
}
userMethods.profile()
let userThree = {
    fname: "alex",
    age: 21,
    city: "gilgit",
    status: "active",
    profile: userMethods.profile
}

user.profile()






let users = [];
function createUser(fullName, email, age, city) {
    // step1
    let user = {};
    // step2
    user.fname = fullName;
    user.email = email;
    user.age = age;
    user.city = city;
    user.profile = function () {
        console.log("Hello " + this.fname)
    }
    // step3
    users.push(user)
    //step4 
    return "User Registered Successfully!!!";
}

let user1 = createUser("Ali", "ali@gmail.com", 21, "GILGIT")
let user2 = createUser("Alex", "alex@gmail.com", 22, "GILGIT")

// console.log(user1)
users[0].profile()





const userFour = Object.create(null); // {}
console.log(user)


let u1 = {
    key1: "value1",
    key2: "value2",
}

let a2 = {
    key3: "value3"
}

console.log(a2.key1)

let a3 = Object.create(u1)  // {}
u2.key3 = "value3"
console.log(a3.key1)



var a = "fsdfds"
var b = new String("sfsd")
console.log(b)
console.log(b._proto_.to)
console.log(b)







const user = Object.create(methods)
user.fname = "Alex"

console.log(user.profile())



const methods = {
    profile: function () {
        console.log("Hello " + this.fname)
    },
    changeName: function (newName) {
        this.fname = newName
    },
    changeAge: function (newAge) {
        this.age = newAge
    }
    ,
    sing: function () {
        return " lalaalalalal"
    }
}
function registerUser(fnmae, email, password) {
    //    step one 
    const user = Object.create(methods);
    // step two
    user.fname = fnmae;
    user.email = email;
    user.password = password;


    // step three
    return user

}




const a1 = registerUser("Alex", "alex@gamil.com", "dasdkgj324")
console.log(u1.profile())