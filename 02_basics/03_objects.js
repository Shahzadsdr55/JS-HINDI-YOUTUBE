// singleton

// object literals


const mySym = Symbol("key1")


const JsUser = {
    name: "Shahzad",
    "full name": "Shahzad Khan",
    [mySym]: "mykey1",
    age: 27,
    location: "Delhi",
    email: "shahzad.sdr60@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "9717831993chatgpt@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "9717831993microsoftr@gmail.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JsUser");
}
JsUser.greetingtwo = function(){
    console.log(`Hello JsUser, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());