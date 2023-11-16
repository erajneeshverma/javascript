//for in loops for objects

const myobj ={
    cpp:"C++",
    rb:"RUBY",
    py:"Python",
    js:"Javascript"
}

for (const key in myobj) {
    console.log(key,myobj[key],myobj.key)
}