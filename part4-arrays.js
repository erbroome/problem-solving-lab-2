// Problem 1. Create an array of favorite foods and perform 

// creating an array of favorite foods
let favoriteFoods = ['tamale', 'sushi', 'falafel', 'pizza', 'tacos', 'pasta'];
// printing the array to the console
console.log(favoriteFoods);
// printing the first element of the array to the console
console.log(favoriteFoods[0]); 
// printing the last element of the array to the console
console.log(favoriteFoods[favoriteFoods.length - 1]);
// printing the length of the array to the console
console.log(favoriteFoods.length);
// adding a new element to the array
favoriteFoods.push('hamburger');
// printing the updated array to the console
console.log(favoriteFoods);
// removing the last element of the array
favoriteFoods.pop();
// printing the updated array to the console
console.log(favoriteFoods);
// removing the first element of the array 
favoriteFoods.shift();
// printing the updated array to the console
console.log(favoriteFoods);
// adding a new element to the beginning of the array
favoriteFoods.unshift('salmon');
// printing the updated array to the console
console.log(favoriteFoods);
// creating an array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// printing the array to the console
console.log(numbers);
// printing the first element of the array to the console
console.log(numbers[0]);
// printing the last element of the array to the console    
console.log(numbers[numbers.length - 1]);
// printing the length of the array to the console
console.log(numbers.length);
// adding a new element to the array    
numbers.push(11);
// printing the updated array to the console
console.log(numbers);
// removing the last element of the array
numbers.pop();
// printing the updated array to the console
console.log(numbers);
// removing the first element of the array
numbers.shift();
// printing the updated array to the console
console.log(numbers);
// adding a new element to the beginning of the array   
numbers.unshift(0);
// printing the updated array to the console
console.log(numbers);
// creating an array of numbers
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// printing the array to the console
console.log(numbers2);
// printing the first element of the array to the console
console.log(numbers2[0]);
// printing the last element of the array to the console
console.log(numbers2[numbers2.length - 1]);
// printing the length of the array to the console
console.log(numbers2.length);
// adding a new element to the array
numbers2.push(11);
// printing the updated array to the console
console.log(numbers2);
// removing the last element of the array
numbers2.pop();
// printing the updated array to the console
console.log(numbers2);
// removing the first element of the array
numbers2.shift();
// printing the updated array to the console
console.log(numbers2);
// adding a new element to the beginning of the array
numbers2.unshift(0);
// printing the updated array to the console
console.log(numbers2);


//Problem 2. Create an array of guest names and perform the 

// a guest list array
let guestList = ['Logan', 'Janice', 'Benjamin', 'Millie', 'Jacob', 'Madison', 'Charlotte', 'Ethan', 'Merrill', 'Ann'];
// printing the array to the console
console.log(guestList);
// printing the first element of the array to the console
console.log(guestList[0]);
// printing the last element of the array to the console
console.log(guestList[guestList.length - 1]);
// printing the length of the array to the console
console.log(guestList.length);
// adding a new element to the array
guestList.push('Phillip');
// printing the updated array to the console
console.log(guestList);
// removing the last element of the array
guestList.pop();
// printing the updated array to the console
console.log(guestList);
// removing the first element of the array
guestList.shift();
// printing the updated array to the console
console.log(guestList);
// adding a new element to the beginning of the array
guestList.unshift('Bailey');
// printing the updated array to the console
console.log(guestList); 
// creating an array of numbers
let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// printing the array to the console
console.log(numbers3);
// printing the first element of the array to the console
console.log(numbers3[0]);
// printing the last element of the array to the console
console.log(numbers3[numbers3.length - 1]);
// printing the length of the array to the console


// problem 3. create an array of weekend tasks

// weekend tasks array
let weekendTasks = ['clean the house', 'do the laundry', 'go grocery shopping', 'cook dinner', 'watch a movie'];
function printTasks(tasks) {
    // printing the tasks to the console
    for (let i = 0; i < tasks.length; i++) {
        console.log(tasks[i]);
    }
}
// printing the tasks to the console
printTasks(weekendTasks);
function logTask(task) {1-5
    // printing the task to the console
    console.log(task);
}   
// printing the tasks to the console
for (let i = 0; i < weekendTasks.length; i++) {
    logTask(weekendTasks[i]);
}
// printing the first task to the console
console.log(weekendTasks[0]);
// printing the last task to the console
console.log(weekendTasks[weekendTasks.length - 1]);
// printing the length of the array to the console
console.log(weekendTasks.length);
// log them with a for loop numbered 1-5
for (let i = 0; i < weekendTasks.length; i++) {
    console.log((i + 1) + '. ' + weekendTasks[i]);
}
// adding a new task to the array
weekendTasks.push('go for a walk');
// printing the updated array to the console
console.log(weekendTasks);
// removing the last task of the array
weekendTasks.pop();
// printing the updated array to the console
console.log(weekendTasks);
// removing the first task of the array
weekendTasks.shift();
// printing the updated array to the console
console.log(weekendTasks);
// adding a new task to the beginning of the array
weekendTasks.unshift('go for a run');
// printing the updated array to the console
console.log(weekendTasks);


// Problem 4. reverse the array of numbers by looping through it
// and printing the numbers in reverse order


let numbers4 = [1, 2, 3, 4, 5];
for (let i = numbers4.length - 1; i >= 0; i--) {
    console.log(numbers4[i]);
}
// printing the array to the console
console.log(numbers4);


// Problem 5. random picker - lunch menu
// lunch menu array
let lunchMenu = ['blt', 'subsandwich', 'pizza', 'hamburger', 'salad'];
// printing the array to the console
console.log(lunchMenu);
for (let i = 0; i < lunchMenu.length; i++) {
    console.log(lunchMenu[i]);
}
//choose a random item from the array and print it to the console
let randomIndex = Math.floor(Math.random(lunchMenu) * lunchMenu.length);
console.log(lunchMenu[randomIndex]);
// printing the length of the array to the console
console.log(lunchMenu.length);
// choose a random item from the array and print it to the console
let randomIndex2 = Math.floor(Math.random(lunchMenu) * lunchMenu.length);
console.log(lunchMenu[randomIndex2]);
// printing the length of the array to the console
console.log(lunchMenu.length);
// choose a random item from the array and print it to the console
let randomIndex3 = Math.floor(Math.random(lunchMenu) * lunchMenu.length);
console.log(lunchMenu[randomIndex3]);

