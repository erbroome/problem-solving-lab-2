//1. Dog Age Converter
// // This program converts dog years to human years
let dogAge = 5 
// // Print the equivalent human age
let humanAge = dogAge * 7
console.log("Your dog's age in human years is: " + humanAge)
// // Print the dog's age in dog years
console.log("Your dog's age in dog years is: " + dogAge)


//2. Tip Calculator
// // This program calculates the tip based on the bill amount  
let billAmount = 50
// // Print the tip amount based on the bill amount
let tipAmount = billAmount * 0.20
console.log("Your tip amount is: " + tipAmount)
// // Print the total amount including tip
let totalAmount = billAmount + tipAmount
console.log("Your total amount including tip is: " + totalAmount)
// // Print the bill amount
console.log("Your bill amount is: " + billAmount)

//3. Even or Odd
// // This program checks if a number is even or odd
let number = 7 
// // Print "Even" if the number is even
// Print "Odd" if the number is odd 
if (number % 2 === 0) {
    console.log("Even")
}
else {
    console.log("Odd")
}   
// // Print the number entered
console.log("The number entered is: " + number)
// // Print the result of the check
console.log("The number is: " + (number % 2 === 0 ? "Even" : "Odd"))    
// // Print the number entered
