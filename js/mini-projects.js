//TipCalculatorproject
let subTotal = 67.72;
let tipAmount;
let totalBill;
let tipPercentage = 0.2; 

tipAmount = subTotal * tipPercentage;
totalBill = subTotal + tipAmount;
console.log("Tip Amount: " + tipAmount.toFixed(2));
console.log("Total Bill: " + totalBill.toFixed(2));

//Paycheck Calculator

let hoursWorked=167.5;
let hourlyRate=4.25;
let grossPay=hoursWorked*hourlyRate;
console.log("Gross Pay: " + grossPay.toFixed(2));