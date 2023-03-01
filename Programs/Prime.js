let number=7;
let isPrime=true;
if(number==1)
{
    console.log("Number is neither prime nor composite number");
}
else {
    for(let j=2;j<number;j++)
    {
        if(number%j==0)
        {
            isPrime = false;
            break;
        }
    }
}
if(isPrime){
    console.log(`${number } is prime number`);
}
else {
    console.log(`${number } is not prime number`);
}
