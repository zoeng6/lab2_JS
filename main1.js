import * as myAccount from "./utilities1.js"

var fName = "Zoe"
var lName = "Ng"
myAccount.welcomeUser(fName, lName);

console.log("My balance : " + myAccount.checkBalance(fName));
var CAD = 1050.20
console.log(`If you convert ${CAD} CAD to USD, you will get ${myAccount.currencyConverter(CAD)} USD.`);
var principal = 1000
var time = 2
var rate = 0.05
console.log(`If you have a GIC deposit of ${principal} CAD for ${time} years, you will have a total return of ${myAccount.gicDeposit(principal,rate,time)} CAD.`);


