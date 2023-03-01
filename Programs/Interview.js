let arr = [1,2,3,4];
let sum = arr.reduce((ps,a) => ps+ a);
console.log("sum "+ sum);

var obj = {
    name : "Amit",
    phoneNo : 9550495,
    age : 15
}

var length = Object.keys(obj).length;
console.log(length);

for(const values in obj)
{
    console.log(values +" "+  obj[values]);
}