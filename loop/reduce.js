const price = [1,2,3,4,5,6];

const tp = price.reduce( (acc,val) => (acc+val),0)

//console.log(tp)


const items = [
    {
        itemName: "Js Course",
        price : 2999,
    },
    {
        itemName: "Py Course",
        price : 3999,
    },
    {
        itemName: "Css Course",
        price : 999,
    },
    {
        itemName: "Java Course",
        price : 12999,
    },
]


const totalPrice = items.reduce ( (acc,item) => acc+item.price , 0);
console.log(totalPrice); 
