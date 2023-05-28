const reverseString = function(word) 
{
    let len = word.length
    , revWord='';
    for(let i=len-1;i>=0;i--)
    {
        revWord = revWord+word.charAt(i); 
    }
    return revWord;
};

// Do not edit below this line
module.exports = reverseString;
