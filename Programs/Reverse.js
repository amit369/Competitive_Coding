let str="amit chaman";
var arr=str.split(" ");
for(let i=0;i<arr.length;i++)
{
    let s=arr[i];
    console.log(s.split("").reverse().join(""));
}