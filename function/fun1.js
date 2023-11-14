// function add(a,b){
//     console.log(a+b);
// }
function add(a,b){
    console.log(a+b);
    return a+b;
}
// add(3,4);
// add(3,4);

// const res = add(4,5);
// console.log("Result : ",res);


function print(username){
    // if(username===undefined){
    //     console.log("username expected");
    //     return;
    // }
    if(!username){
        console.log("username expected");
        return;
    }
    return `${username} just login..`;
}

// const str = print("RKV");
const str = print();

console.log(str)