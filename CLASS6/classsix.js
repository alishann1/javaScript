// Nested Object Destructuring 

var user = [
    {
        id:2344,
        fullname:"John",
        age:30,
        address:{
            city:"London",
            country:"UK"
        }
    }
]

var [{address:{country:userCountry}}] = user
console.log(userCountry)

var [{id:userid}] = user
console.log(userid)