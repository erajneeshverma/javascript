const mysym = Symbol("Key1");


const user={
    name:"Rajnish",
    age:18,
    [mysym]:"my key 1",
    "location site":"Jaipur",
    email:"Raj@raj.com",
    isLogin:false,
    lastLogin:["Monday","Friday"],

};
console.log(user.email)
console.log(user["email"])

//console.log(user.location site)
console.log(user["location site"])

console.log(user[mysym])

console.log(user)
user.email="Rlksdlaskhdohfkeasldffkibefw";

console.log(user)
Object.freeze(user);
user.email="Rlksdfkibefw";
console.log(user)