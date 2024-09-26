//A Promise is a special JavaScript object. It produces a value after an asynchronous (aka, async) operation completes successfully, or an error if it does not complete successfully due to time out, network error, and so on.
//promise have 2 parts resolve and reject
const promise1 = new Promise(function(resolve,reject){
    //do async tasks
    // DB Calls, cryptography, network
    setTimeout(function(){
        console.log('async task is complete')
        resolve()
    },1000)
})

promise1.then(function(){
    console.log('promise complete')
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2')
        resolve()
    },2000)
}).then(function(){
    console.log('task 2 resolved')
})

const promise3 = new Promise(function(resolve,reject){
    resolve({username: "chai", email: "chai@example.com"})
},3000)
promise3.then(function(user){
    console.log(user)
})

const promise4 = new Promise(function(resolve,reject){
    resolve()
})
promise4.then(function(){
    
})