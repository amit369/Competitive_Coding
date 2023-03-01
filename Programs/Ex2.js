var emp = {
    name : "Daniel",
    age : 23
}
console.log(emp);

console.log(typeof(undefined));
console.log(typeof( null));

const person = {
    fname : "John",
    lname : "Doe",
    age : 25
}   
for(let x in person)
{
    console.log(x + " "+ person[x]);
}