function reverseArray(b)
{
   var i,j,sum=0;
   n=b.length;
   var a=[n];
   for(i=0,j=n-1;i<n,j>=0;i++,j--)
   {
       a[j]=b[i];
   }
   console.log(a);
}
reverseArray([2,3,4,5,6,7]);
function reverseArrayInPlace(b)
{
    var i;
    var x,n=b.length;
    for (i=0;i<Math.floor(n/2);i++) 
    {    
    	x=b[i];
    	b[i]=b[n-1-i];
    	b[n-1-i]=x;
  	}
  	console.log(b);
}
reverseArrayInPlace([1,2,3,4,5,6]);