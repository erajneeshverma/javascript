// function calculateCartPrice(...num1){
//     return num1;
// }


// // console.log(calculateCartPrice(234.90))
//  console.log(calculateCartPrice(234.90,34,23))

//  function calculateCartPrice2(val1,val2,...num1){
//     console.log(val1);
//     console.log(val2);
//     return num1;
// }

// console.log(calculateCartPrice2(34,56,789,903,2,1,23))



const user={
    username: "Rajnish",
    age:22
}

function getUser(anyObject){
    console.log(`user name is : ${anyObject.username} and age is ${anyObject.age}`);
}

// getUser(user)
getUser({username:"Sweta",age:23})



const newArr = [23,4,3,2,34];
function return2ndValue(getArr){
    return getArr[2];
}

// console.log(return2ndValue(newArr));
console.log(return2ndValue([23]));
