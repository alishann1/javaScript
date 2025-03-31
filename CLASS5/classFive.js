// Non Primitive Datatype /  Reference Datatype
//  Big Data
// Arrays

// _______________________

var fruits = ["Apple" , "banana" , "grapes", 21 , true , 12n , undefined , null , [1,2,3]]

// objects

var user = {
    name:"John",
    age:21,
    email:"abc@example.com",
    city:"Gilgit",
    country:"Pakistan"
}

var users = [
  {
    name: "John",
    age: 21,
    email: "abc@example.com",
    city: "Gilgit",
    country: "Pakistan",
  },
  {
    name: "alex",
    age: 23,
    email: "adsdf@example.com",
    city: "Gilgit",
    country: "Pakistan",
  },
];

console.log(users);
var users = [
      {
        name: "John",
        age: 21,
        email: "abc@example.com",
        city: "Gilgit",
        country: "Pakistan",
      },
      {
        name: "alex",
        age: 23,
        email: "adsdf@example.com",
        city: "Gilgit",
        country: "Pakistan",
      },
    ];



    var nums = [1,2,3,4];
    console.log(nums , nums.length)

var gn = nums[3] +6766
console.log(gn)
console.log(nums)

var key1 = 'id'
var product = {
    [key1]:3234554666, 
    pname:"Shoes",
    price:1799,
    discount:10,
    rating :4.5
}
var productName= product.pname
bracket 
var productName = product[pname]
console.log(product)
console.log(product[key1])


const arr= ["a" ,"b" , "c"];
console.log(arr)
// get
console.log(arr[0])
// update
arr[0] = "updated"
console.log(arr[0])
console.log(arr)
//add
arr[3] ="adding"
console.log(arr)




var product = {
    id:3234554666, 
    pname:"Shoes",
    price:1799,
    discount:10,
    rating :4.5
}

// get 1> bracket 
console.log(product.id)

// get 2> bracket
console.log(product["id"])

// values update
product.id =233244
console.log(product)


add
product.stock = 123
console.log(product)


// Computed properties 


var users = [
      {
        name: "John",
        age: 21,
        email: "abc@example.com",
        city: "Gilgit",
        country: "Pakistan",
        address:{
            street:"123 Main St",
            city:"Gilgit",
            country:"Pakistan"
        }
      }
    ];

    console.log(users.length)
