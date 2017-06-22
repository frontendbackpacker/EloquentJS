function range(start,end,step)
{
    if(step==null)
    step=1;
    var n,i;
    if(start<=end&&step>0)
    {
        n=end-start+1;
        var a=[n];
        for(i=0;i<n;i++)
        {
            if(start<=end)
            {
                a[i]=start;
                start+=step;
            }
            else 
            break;
        }
    }
    else if(start>=end&&step<0)
    {
        n=-end+start+1;
        var a=[n];
        for(i=0;i<n;i++)
        {
            if(start>=end)
            {
                a[i]=start;
                start+=step;
            }
            else
            break;
        }
    }
    return(a);
}
console.log(range(1,10));
console.log(range(5,-2,-1));
function sum(b)
{
   var i,sum=0;
   for(i=0;i<b.length;i++)
   {
       sum+=b[i];
   }
   console.log(sum);
}
sum(range(1,10));