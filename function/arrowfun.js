// const user = {
//     username: "Rajnish",
//     membershipPrice: 399,
//     welcomeMessage: function(){
//         console.log(`${this.username}, Welcome to website`)
//         //console.log(this)
//     }
// }
// //this  -> current context
// // user.welcomeMessage()

// // user.username = "Sweta"
// // user.welcomeMessage()
// // console.log(this)

// function Rajjo(){
//     let user = "ABCD"
//     console.log(this.user)
//     // console.log(this)
// }

// Rajjo()


// // console.log(this)




// const Raj = function(){
//     let user = "ABCD"
//     console.log(this.user)
//    // console.log(this)
// }

// Raj()


// const Raj = () =>{
//     let user = "ABCD"
//     console.log(this.user)
//     console.log(this)
// }


// Raj()



// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// console.log(addTwo(4,5))

// const addTwo = (num1,num2) => num1+num2

// const addTwo = (num1,num2) => (num1+num2)


// const addTwo = (num1,num2) => ({username: "Rajjo",age:23})

// console.log(addTwo(4,5))


// function chai(){
//     console.log("DB Connected");
// }() 

//error

//to avooid the pollution(global var,objecs, , global function ...etc) of gobal scope , we try to use IIFE (immediatly involved function execution)


(function chai(){
    console.log("DB Connected");
})();


//semicolon is important here...
(function chai(){
    //named IIFE
console.log("DB Connected");
})();

//another way

( () => {
    console.log("Db again connnected")
})();


( (name) => (
    console.log(`Db again connnected,${name}`)
))('Rajnish');
