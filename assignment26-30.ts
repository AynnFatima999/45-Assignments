//QUESTION 26:
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

import { Console } from "console";

//If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

let alien_color2 = 'green';

if (alien_color2 == 'green'){
console.log("Congratulation! you have earned five points for shooting the alien.")
}


//if the alien’s color isn’t green, print a statement that the player just earned 10 points.
else{console.log("Congratulation! you have earned 10 points for shooting the alien.")}

//Write one version of this program that runs the if block and another that runs the else block.

let mode = 'dark';
let color;

if(mode == "dark"){
    color = "black"
} 
else{
    color = "white"
};
console.log(color);



//QUESTION 27:

//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//If the alien is green, print a message that the player earned 5 points.
console.log("VERSION FOR GREEN:");
alien_color2 = "green"; 

if (alien_color2 == 'green'){
    console.log("Congratulation! you have earned 5 points for shooting the alien.")
    }

//If the alien is yellow, print a message that the player earned 10 points.


else if(alien_color2 == "yellow") {
    console.log("Congratulation! you have earned 10 points for shooting the alien.")
}

// If the alien is red, print a message that the player earned 15 points.

else if(alien_color2 == 'red') {
    console.log("Congratulation! you have earned 15 points for shooting the alien.")
}




//version 2:
console.log("VERSION FOR YELLOW:");
alien_color2 = "yellow"; 

if (alien_color2 == 'green'){
    console.log("Congratulation! you have earned 5 points for shooting the alien.")
    }

//If the alien is yellow, print a message that the player earned 10 points.

else if(alien_color2 == "yellow") {
    console.log("Congratulation! you have earned 10 points for shooting the alien.")
}

// If the alien is red, print a message that the player earned 15 points.

else if(alien_color2 == 'red') {
    console.log("Congratulation! you have earned 15 points for shooting the alien.")
}



//Version 3:
console.log("VERSION FOR RED:");
alien_color2 = "red"; 

if (alien_color2 == 'green'){
    console.log("Congratulation! you have earned 5 points for shooting the alien.")
    }

//If the alien is yellow, print a message that the player earned 10 points.


else if(alien_color2 == "yellow") {
    console.log("Congratulation! you have earned 10 points for shooting the alien.")
}

// If the alien is red, print a message that the player earned 15 points.

else if(alien_color2 == 'red') {
    console.log("Congratulation! you have earned 15 points for shooting the alien.")
}








//Question 28:
//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
console.log("FOR BABY 1;")
let age = 1;
//If the person is less than 2 years old, print a message that the person is a baby.
if(age < 2){
    console.log("The person is a Baby.")}

else if(age >= 2 && age < 4 ){
    console.log("The person is a Toddler.")
}

else if (age >= 13 && age < 20){
    console.log("The person is a Teenager.")
}

else if (age >= 20 && age < 65){
    console.log("The person is an Adult.")
}

if (age == 65){
    console.log("The person is an Elder.")
}





//VER 2:
console.log("FOR TODDLER 2-4:")
 age = 2.5;
//If the person is less than 2 years old, print a message that the person is a baby.
if(age < 2){
    console.log("The person is a Baby.")}

else if(age >= 2 && age < 4 ){
    console.log("The person is a Toddler.")
}

else if (age >= 13 && age < 20){
    console.log("The person is a Teenager.")
}

else if (age >= 20 && age < 65){
    console.log("The person is an Adult.")
}

if (age == 65){
    console.log("The person is an Elder.")
}



//VER 3:
console.log("FOR TEENAGER 13-20:")
age = 15;
//If the person is less than 2 years old, print a message that the person is a baby.
if(age < 2){
    console.log("The person is a Baby.")}

else if(age >= 2 && age < 4 ){
    console.log("The person is a Toddler.")
}

else if (age >= 13 && age < 20){
    console.log("The person is a Teenager.")
}

else if (age >= 20 && age < 65){
    console.log("The person is an Adult.")
}

if (age == 65){
    console.log("The person is an Elder.")
}



//ver 4 :
console.log("FOR ADULT 20-65:")
 age = 35;
//If the person is less than 2 years old, print a message that the person is a baby.
if(age < 2){
    console.log("The person is a Baby.")}

else if(age >= 2 && age < 4 ){
    console.log("The person is a Toddler.")
}

else if (age >= 13 && age < 20){
    console.log("The person is a Teenager.")
}

else if (age >= 20 && age < 65){
    console.log("The person is an Adult.")
}

if (age == 65){
    console.log("The person is an Elder.")
}




//ver 5 :.
console.log("FOR ELDER 65+:")
 age = 70;
//If the person is less than 2 years old, print a message that the person is a baby.
if(age < 2){
    console.log("The person is a Baby.")}

else if(age >= 2 && age < 4 ){
    console.log("The person is a Toddler.")
}

else if (age >= 13 && age < 20){
    console.log("The person is a Teenager.")
}

else if (age >= 20 && age < 65){
    console.log("The person is an Adult.")
}

if (age >= 65){
    console.log("The person is an Elder.")
}




//QUESTION 29:
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

const favFruits = ["Mango", "Grapes", "Guava", "Apple"];

//Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
 
//ver1:
if(favFruits.includes('Mango')){
    console.log("Mango is my most favourite fruit.")
}

//ver 2
if(favFruits.includes('Grapes')){
    console.log("Grapes is my most favourite fruit.")
}

//ver 3:
if(favFruits.includes('Guava')){
    console.log("Guava is my most favourite fruit.")
}


//ver 4:
if(favFruits.includes('orange')){
    console.log("Orange is my most favourite fruit.")
}

//ver5:
if(favFruits.includes('Banana')){
    console.log("Banana is my most favourite fruit.")
}








//QUESTION 30:
//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

let userName = ["Admin", "Eric", "Batool", "Sameer", "Raza"];

//If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

for(let user in userName)
if(userName[user] === "Admin") 
console.log(console.log(`Hello ${userName[user]}, would you like to see a status report?`))

else {
    console.log(`Hello ${userName[user]}, thank you for logging in again.`)
};

 
 




    




























