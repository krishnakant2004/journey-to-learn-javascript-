// A Promise is an object that represents the eventual result of an asynchronous operation.

// Pending → operation is still running
// Fulfilled → operation completed successfully
// Rejected → operation failed


// ✨ Why Do We Need Promises?
// Before Promises, we used callbacks, which often caused:
// Callback hell
// Hard-to-read and hard-to-maintain code
// Difficult error handling
// Promises solve these problems by giving a cleaner, chainable structure:

const promiseOne = new Promise((resolve , reject) => {
    //do an async task
    // DB call , cryptography , network
    setTimeout(function(){
        console.log("async task  complete")
        resolve()
    } , 1000)
})

promiseOne.then(()=>{
    console.log("promise consumed")
})

// 2 promise
const promiseTwo = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username:"Krishnakant Dinkar" , rollNo : "122cs0057"})
    },1000)
})

promiseTwo.then(function(user){
    console.log(user)
})


//3rd Promise

const promise3 = new Promise((resolve , rejected) => {
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:"Krishnakant Dinkar" , rollNo : "122cs0057"})
        }else{
            rejected('Error: Something went Wrong')
        }
    },1000)
})

 promise3.then((user)=>{
        console.log(user)
        return user.username
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(`E: ${error}`)
}).finally(()=>console.log("The promise is either resolved or rejected"))


// async and await   ------------- promises
// same work done by async await


const promise4 = new Promise((resolve , rejected) => {
    setTimeout(()=>{
        let error = true;
        console.log("hi")
        if(!error){
            resolve({username:"Krishnakant Dinkar" , rollNo : "122cs0057"})
        }else{
            rejected('Error: Something went Wrong')
        }
    },1000)
})

async function consumePromise4(){
    try {
        const response = await promise4
        console.log(response)
    } catch (error) {
        console.log(`error: ${error}`)
    }
}
consumePromise4()



// this came first 
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
