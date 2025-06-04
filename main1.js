import * as myAccount from "./utilities1.js"

var User = "Zoe"
myAccount.welcomeUser(User);
console.log("My balance : " + myAccount.checkBalance(User));
console.log("Your new balance after deposit : " + myAccount.deposit(200,User));
console.log("Your new balance after withdraw: " + myAccount.withdraw(20,User));

