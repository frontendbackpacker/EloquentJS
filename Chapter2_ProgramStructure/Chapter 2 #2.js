function f3()
{
    var i;
    for(i=1;i<=100;i++)
    {
        if(i%3==0)
        {
            if(i%5==0)
            {
                console.log("FizzBuzz");
            }
            else
            {
                 console.log("Fizz");
            }
        }
        else if(i%5==0)
        {
            console.log("Buzz");
        }
    }
}
f3();