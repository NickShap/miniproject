//TipCalculatorproject
let subTotal = document.getElementById("subTotalInput").valueAsNumber;
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

//Grade Calculator
let pointsEarned = 85;
let totalPoints = 100;
let gradePercentage = (pointsEarned / totalPoints) * 100;
console.log("Grade Percentage: " + gradePercentage + "%");

//Gas cost clancualtor
let totalDistance = 67; // miles
let fuelEfficiency = 22; // miles per gallon
let gasPrice = 8.43 ; // dollars per gallon
let totalGasCost = (totalDistance / fuelEfficiency) * gasPrice;
console.log("Total Gas Cost: " + totalGasCost.toFixed(2));