var amount = 5000; 
var intrest = 6;
var year = 4; 
var compound_intrest = Math.trunc(amount * (1 + intrest / 100) ^ year - amount);
console.log(compound_intrest);
