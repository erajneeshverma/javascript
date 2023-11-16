const coding =["js","CPP","JAVA","Python","Ruby"];
// coding.forEach( function (val){
//     console.log(val)
// })


// coding.forEach( (val)=>{
//     console.log(val)
// });

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)


// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })


const mycoding = [
    {
        name:"Javascript",
        file : "js"
    },
    {
        name:"Java",
        file : "java"
    },
    {
        name:"C++",
        file : "cpp"
    },
    {
        name:"Python",
        file : "py"
    },
]


mycoding.forEach((item)=>{
    console.log(item.name,item.file);
})