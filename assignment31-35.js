"use strict";
//QUESTION 31:
Object.defineProperty(exports, "__esModule", { value: true });
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
let flowerColor = ["Red", "Green", "Yellow"];
if (flowerColor.includes('Red')) {
    console.log(flowerColor);
}
else { }
//If the list is empty, print the message We need to find some users!
if (flowerColor.includes('Pink')) {
    console.log(flowerColor);
}
else {
    console.log("We need to find some users");
}
//Remove all of the usernames from your array, and make sure the correct message is printed.
console.log("'Empty array:' ");
flowerColor = [];
if (flowerColor.length == 0) {
    console.log(flowerColor);
}
//QUESTION 32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//Make a list of five or more usernames called current_users.
let current_users = ["Alina110", "Haider999", "Raza05", "Hassan12", "Meesam118"];
let new_user = ["Akbar09", "Adan00", "Haider999", "Rubab786", "Alina110"];
//Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
let userCheck = current_users.map((user) => user.toLowerCase());
for (let val of new_user) {
    if (userCheck.includes(val.toLowerCase())) {
        console.log(`Sorry Username @${val} is already taken. Try another.`);
    }
    else {
        console.log(`Username @${val} is available.`);
    }
}
//QUESTION 33:
//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//Store the numbers 1 through 9 in a array.
const ordinalNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//• Loop through the array.
for (const number of ordinalNum) {
    let Suffix;
    if (number == 1) {
        Suffix = "st";
    }
    else if (number == 2) {
        Suffix = "nd";
    }
    else if (number == 3) {
        Suffix = "rd";
    }
    else {
        Suffix = "th";
    }
    console.log(`${number}${Suffix}`);
}
//QUESTION 34:
//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
let delacious_Food = ["fajita", "cheese", "bbq"];
for (let flavor of delacious_Food)
    //Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
    console.log(`I like ${flavor} flavor pizza very much.`);
console.log("I just love pizzas. You can call me a pizza lover. Fajita with double cheese is my favourite flavor. Instead of odering other food I always prefer to eat pizza. Pizza,Pizza,Pizza acha sorry.");
//Question 35:
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let petAnimal = ["lion", "cat", "tiger"];
petAnimal.forEach((animal) => {
    console.log(`The ${animal} is member of the same family animal.`);
});
console.log("They are all hunters by nature. They all have sharp teeth and sharp claws that they use to catch prey.");
