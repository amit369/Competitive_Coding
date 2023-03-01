function Palindrome(num)
{
     num = ""+num;
     for(var i=0;i<num.length/2;i++)
     {
        if(num[i] !== num[num.length- (i+1)])
        return false;
     }
     return true;
}
function nextPalindrome(num)
{
   while(!Palindrome(++num))
   {

   }
   return num;
}
console.log(nextPalindrome(15));