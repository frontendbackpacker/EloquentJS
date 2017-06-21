function f2(size)
{
    var i;
    var j;
    var t="";
    for(i=0;i<size;i++)
    {
        for(j=0;j<size;j++)
        {
            if(i%2==0)
            {
              if(j%2==0)
              t+=" ";
              else
              t+="#";
              
            }
            if(i%2==1)
            {
              if(j%2==1)
              t+=" ";
              else
              t+="#";
              
            }
        }
        console.log(t);      
     	t="";
    }
}
f2(8);