function isEven(n)
{
    if(n==0)
    return true;
    else if(n==1)
    return false;
    else if(n<0)
    console.log("WRONG INPUT");
    else
    return isEven(n-2);
}
isEven(50);
isEven(75);