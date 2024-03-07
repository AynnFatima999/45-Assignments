//QUESTION 21
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface Student { 
    name : string,
    age : number,
    isPass : string,
    city : string

} ;


const Data :Student[] = [{
     name : "Muhammad Ali",
    age : 25,
    isPass : "Yes",
    city : 'Karachi'
},

{
    name : "Sidra Iqbal",
    age : 22,
    isPass : "No",
    city : 'Lahore'

},

   {name : "Hassan Shahzaib",
    age : 24,
    isPass : "Yes" ,
    city : 'Islamabad' 
   },

];

console.log(Data);







//QUESTION 22:

























//QUESTION 23:
























//QUESTION 24:

















//QUESTION 25:



//Question 22:
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

console.log('Intentional Error:')

let arr = ["Apple", "Mango", "Banana"];

console.log("I want to repalce Banana with Grapes");

//arr.replace(2, "Apple")
  //in this programme we can not replace string values in array. its showing an error:

arr.splice(2,1, "Grapes")
console.log(arr);









//QUESTION 23:
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
/* let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru') */

console.log("Five True Condtional Statements:")

let auto = "ferrari"
let veg = "tomato";
let x = 10;
let y = 12;

console.log("auto === 'ferrari', I predict true.");

if(auto === "ferrari") 
console.log(auto === "ferrari");

console.log("veg ==='tomato', I predict true.");
if( veg === "tomato") {
    console.log(veg === 'tomato');
}

console.log("x < y, I predict true.");
if(x < y) {
    console.log(x < y);
}

console.log("x + y = 22, I predict true.");
if(x + y == 22) {
    console.log (x + y == 22);
}

console.log("x != y, I predict true.");
if (x != y) //I predict True:
 {
console.log(x != y)
}



console.log("Five False Conditional Statement:")


let car = 'city';

console.log("Is car != 'city'? I predict False.");
console.log(car != 'city');

console.log("Is car !== 'city'? I predict False.");
console.log(car !== 'city');

console.log("Is car > 'city'? I predict False.");
console.log(car > 'city');

console.log("Is car < 'city'? I predict False.");
console.log(car < 'city');

console.log("Is !car? I predict False.");
console.log(!car); 











//QUESTION 24:

// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

let name1 = "Amaan";
let name2 = "Abbas";


//• Tests for equality and inequality with strings

console.log('Is name1==name2 ?, I predict False. ')
console.log(name1== name2);

console.log('Is name1!==name2 ?, I predict True. ')
console.log(name1== name2);



//• Tests using the lower case function

let word = "AliNa"
console.log("Is word.toLowerCase()== 'hello'?, I predict False.")
console.log(word.toLowerCase() == 'hello');



//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let num = 5;
let num2 = 2;

console.log("num==num2 ?, I predict False.")
console.log(num==num2);

console.log("num!==num2 ?, I predict True.")
console.log(num!==num2);


console.log("num is greator than  num2 ?, I predict True.")
console.log(num > num2);

console.log("num < num2 ?, I predict False.")
console.log(num < num2);


console.log("num is greator than equal num2 ?, I predict True.")
console.log(num >= num2);

console.log("num <= num2 ?, I predict False.")
console.log(num <= num2);


//• Tests using "and" and "or" operators

let age = 28;
let isAdult //= age >= 18;
console.log("If Age is equal to 18 && greator than 18?, I predict True.")
if(age == 28 && age > 18){
    console.log(age == 28 && age > 18);
}


console.log("If Age is equal to 18 || less than 18?, I predict False.")
if(age == 28 || age < 18){
    console.log(age == 28 && age < 18);
}



//• Test whether an item is in a array

const fruits = ["apple", "banana", "orange"];
const person = "Mehak";


console.log("If apple in array ?, I predict True.")
console.log(fruits.includes("apple"));


//• Test whether an item is not in a array 


console.log("Is person in fruits? I predict False.");
console.log(fruits.includes("person"));








//QUESTION 25:

/*Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
*/
//version 1:
let alien_color = "green"

if(alien_color == 'green'){
    console.log ("Congratulation! you have earned five points.")
}

//Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
// version 2:
alien_color = 'blue';
if(alien_color === 'green'){
    console.log ("Congratulation! you have earned five points.")
}







