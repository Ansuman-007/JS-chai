//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356758n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "ansh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3




//+++++++++++++++++++++++++++++++++++++++++++++++++++++
//Memory
//Stack(primitive),Heap(Non-primitive)
// let mywebsiteName= "ansumanpadhi.tech"
// let anotherName = "mywebsiteName"
// console.log(mywebsiteName);
// console.log(anotherName);

let userOne ={
    email: "user@gmail.com",
    upi: "ansu@ybl"
}
let userTwo = userOne
userTwo.email="ramaswamy@harekrishna.com"
console.log(userTwo);
