//1. 'Grade Checker;'
// This program checks the grade based on a score
let score = 82
// Print A, B, C, D, or F based on the score
if (score >= 90) {
    console.log("A")
}
else if (score >= 80) {console.log("B")}
else if (score >= 70) {console.log("C")}
else if (score >= 60) {console.log("D")}
else {console.log("F")} 

//2. Pizza Quantity Warning
// This program checks the quantity of pizzas ordered
let quantity = 12   
// Print a warning if the quantity is more than 10
if (quantity > 10) {
    console.log("Warning: You have ordered more than 10 pizzas.")
}
// Print the quantity of pizzas ordered
console.log("You have ordered " + quantity + " pizzas.")


//3. Login Simulator
// This program simulates a login process
let password = "letmein"; // or  use prompt
// Print "Acess granted" if the password is correct
// Print "Access denied" if the password is incorrect
if (password === "letmein") {
    console.log("Access granted")
}
else {
    console.log("Access denied")
}
// Print the password entered   