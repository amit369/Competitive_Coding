function sumofDigits(num)
{
    if(num<10)
    return num;
    else {
        return sumofDigits(num%10 + sumofDigits(Math.floor(num/10)));
    }
}

console.log(" sum " + sumofDigits(12345));