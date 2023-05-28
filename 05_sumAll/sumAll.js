const sumAll = function(firstNum,secondNum) 
{
    let  smaller,bigger,sum = 0;
    if (Number.isInteger(firstNum) && Number.isInteger(secondNum))
    {
        if (firstNum < 0 || secondNum < 0) return "ERROR";
        else if(firstNum<secondNum)
        {
            smaller = firstNum;
            bigger = secondNum;
        }
        else
        {
            smaller = secondNum;
            bigger = firstNum;
        }
        for(let i = smaller;i<=bigger;i++)
        {
            sum += i;
        }
        return sum;
    }
    else return 'ERROR';    
};

// Do not edit below this line
module.exports = sumAll;
