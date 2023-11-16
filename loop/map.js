const nums = [1,2,3,4,5,6,7,8,9,10];

//const newNums = nums.map( (val) => val+10)

// const newNums = nums
//                 .map( (val) => val*10)
//                 .map( (val) => val+1)



const newNums = nums
                .map( (val) => val*10)
                .map( (val) => val+1)
                .filter( (val) => val<=51)

console.log(newNums);