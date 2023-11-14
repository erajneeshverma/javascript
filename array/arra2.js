const marvel=["SpiderMan","Irom Man","Thor"]
const dc = ["SuperMan","Batman","Flash"]

// marvel.push(dc)
// console.log(marvel)

// const all = marvel.concat(dc)
// console.log(all)

const all_heros =  [...marvel,...dc]
console.log(all_heros)

const arr=[1,2,3,4,[34,53,43],[343,422,222,224],24,24,2,42];
const real_array = arr.flat(Infinity)
console.log(real_array)

