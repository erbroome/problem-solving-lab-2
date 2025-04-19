//1. Dog Age Converter
// // This program converts dog years to human years
function dogAgeToHumanAge(dogAge) {
    // // Convert dog years to human years
    let humanAge = dogAge * 7
    return humanAge
}   
let result = dogAgeToHumanAge(5) 


//2. Tip Calculator
// // This program calculates the tip based on the bill amount  

function calculateTip(billAmount, tipPercentage) {
    return billAmount * tipPercentage
    
    
}
let billAmount = calculateTip(100, 0.2)
console.log("The tip is: " + billAmount)


//3. Even or Odd
// // This program checks if a number is even or odd

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return true
    } else {
        return false
    }       

}
console.log(checkEvenOdd(4))
