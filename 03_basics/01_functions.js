function sayMyName(){
    console.log("A")
    console.log("Y")
    console.log("U")
    console.log("S")
    console.log("H")
}

// sayMyName()

function addTwoNum(number1, number2){
    console.log(number1+number2)
}
// const result = addTwoNum(5,3)
// console.log(result)                         //this will give undefined coz we didnt define the return type of function

function addTwoNum(number1, number2){
    let result = number1+number2
    return result
}
const result1 = addTwoNum(5,3)
// console.log("result:", result1)


function loginUserMessage(username = "sam"){               //(username = sam) will give sam if we dont pass anything in the function
    if(!username){
        return console.log("please enter a username")
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())

