function countBs(word)
{
    var n=word.length;
    var i,cnt=0;
    for(i=0;i<n;i++)
    {
        if(word.charAt(i)=='B')
        cnt++;
    }
    return cnt;
}
function countchar(word,letter)
{
    var n=word.length;
    var i,cnt=0;
    for(i=0;i<n;i++)
    {
        if(word.charAt(i)==letter)
        cnt++;
    }    
    return cnt;
}
console.log(countBs("BABY"));
console.log(countchar("MISSISSIPPI","S"));
