function sumofDigit(n)
{
    if(n<10)
    return n;
    else {
        return sumofDigit(n%10 + sumofDigit(Math.floor(n/10)))
    }
}
console.log(sumofDigit(12346));