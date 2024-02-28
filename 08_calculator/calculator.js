const add = function(num1,num2) {
  return num1+num2;
	
};

const subtract = function(num1,num2) {
	 return num1-num2;
};

const sum = function(arr) {
  if (arr.length===0) return 0;
  return arr.reduce((accumlator,current)=>accumlator+current,0);
};

const multiply = function(arr) {
  if (arr.length===0) return 0;

  return arr.reduce((accumlator,current)=>accumlator*current);
};

const power = function(num1,num2) {
	if (num2===0) return 1;

  let raiseToPower=1;
  for(let i=0;i<num2;i++){
    raiseToPower=raiseToPower*num1;
  }
  return raiseToPower;
};

const factorial = function(num) {
  if (num===0 || num===1) return 1;


  let fact=num;

  for(let i=num-1;i>=1;i--){
    fact=fact*i;
  }
  return fact;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
