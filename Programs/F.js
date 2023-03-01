function fibo(num)
{
    if(num==1)
    {
        return 0;
    }
    if(num==2)
    {
        return 1;
    }
    else {
        return fibo(num-1) + fibo(num-2);
    }
}