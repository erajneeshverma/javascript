const tinderUser = new Object() //singleton object

const tinderuser2 = {} //normal object

tinderuser2.id = "123abc"
tinderuser2.name  = "Rajnish"
tinderuser2.isLogin = false;

//console.log(tinderuser2)

const regularUser={
    email: "Rajnish@rajnish.com",
    fullname:{
        firstname: "Rajnish",
        middlename: "Kumar",
        lastname: "Verma",
    }
}

//console.log(regularUser);


const obj1 = {
        1:"a",
        2:"b",
        3:"c",
}

const obj2 = {
    4:"a",
    5:"b",
    6:"c",
}


const obj4 = {
    7:"a",
    8:"b",
    9:"c",
}
const obj5 = {
    11:"a",
    22:"b",
    33:"c",
}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2);
// console.log(obj1);
// console.log(obj2);

// const obj3 = Object.assign({},obj1,obj2,obj4,obj5)
// console.log(obj3);

//spread operator

// const obj3 = {...obj1,...obj2}
// console.log(obj3);


const user= [
    {
        id : 1,
        email: "one@gmail.com",
    },
    {
        id:2,
        email:"two@gmail.com",
    },
    {
        id : 3,
        email: "three@gmail.com",
    },
    {
        id:4,
        email:"four@gmail.com",
    }
]


// console.log(user[1].email)

//important
console.log(tinderuser2);
console.log(Object.keys(tinderuser2))
console.log(Object.values(tinderuser2))
console.log(Object.entries(tinderuser2))

console.log(tinderuser2.hasOwnProperty('name2'))