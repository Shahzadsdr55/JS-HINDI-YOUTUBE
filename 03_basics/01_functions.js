function sayMyName() {
    // console.log("S")
    // console.log("H")
    // console.log("A")
    // console.log("H")
    // console.log("Z")
    // console.log("A")
    // console.log("D")
}

sayMyName()

// function addTwoNumbers(Number1, Number2){

//     console.log(Number1 + Number2);
// }

function addTwoNumbers(Number1, Number2){

    // let result = Number1 + Number2
    // return result
    return Number1+ Number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMassage(username = "sam") {
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMassage("Shahzad"))
// console.log(loginUserMassage("Shahzad"))


function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "shahzad",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username: "shahzad",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondvalue(getArray) {
    return getArray[1] 
}

// console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([200, 400, 100, 600]));