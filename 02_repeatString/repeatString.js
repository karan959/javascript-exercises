const repeatString = function(word,repNo) 
{
    if(repNo <0) return "ERROR";
    else if(repNo == 0) return '';
    else{
        let string = '';
        for(let i = 1;i<=repNo;i++)
        {
            string = string+word;
        }      
    }    
    return string;
// Do not edit below this line
module.exports = repeatString;
