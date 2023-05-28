const convertToFahrenheit = function(temp) 
{
  let conTemp = ((temp * (9/5)) + 32);
  conTemp = Math.round(conTemp*10)/10;
  return conTemp;

};

const convertToCelsius = function(temp)
{
  let conTemp = ((temp - 32) * (5/9));
  conTemp = Math.round(conTemp*10)/10;
  return conTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
