//for of loop

const arr=[1,2,3,4,5]

for (const it of arr) {
    console.log(it)
}

//for in loop

for (const key in arr) {
    console.log(key,arr[key])
}



//maps

const map = new Map()

map.set("state","Bihar")
map.set("country","India")
map.set("country","Bharat")
map.set("pin","824205")

for (const iterator of map) {
    console.log(iterator);
}

for (const [key,val] of map) {
    console.log(key,val);
}

const myobj = {
    "game1":'SFE',
    "Game2":"spicder"
}
//error object are not teratable
// for (const iterator of myobj) {
//     console.log(iterator)
// }