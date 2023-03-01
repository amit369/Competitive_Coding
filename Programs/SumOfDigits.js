let num = 1256;

function sumDigits(n){
    if(n<10)
    return n;
    else 
    {
     return  sumDigits(n%10 + sumDigits(Math.floor(n/10)))
    }
}

console.log(sumDigits(num));