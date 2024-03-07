
//QUESTION 06:
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.


let personName: string = "\t   Aynn Fatima  \n";

console.log("With whitespace", personName);

let strippedOne : string = personName.trim();
console.log(strippedOne);



//Question 7:
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

const Sum : number = 4 + 4;

console.log("Sum of 4 + 4 =", Sum);


const Sub : number = 12 - 4;

console.log("12 - 4 =",Sub);


const Mul : number = 2 * 4;
console.log("2 Multiply by 4 =", Mul);


const Div : number = 16 / 2;
console.log("16 divided by 2 =" , Div);
//WE CAN ALSO PRINT THESE VALUES IN "BACK TICKS"

  let method2a :string = `the sum of 4 +4 is equal to ${Sum}`;
let method2b = `12 - 4 is equal to ${Sub}`;
let method2c = `2 Multiply by 4 is equal to ${Mul}`;
let method2d = `16 divided by 2 is equal to ${Div} `;

  let four = [method2a, method2b, method2c, method2d];
console.log(four);




//QUESTION 08:
//You should create four lines that look like this: console.log(5 + 3)

//same as above

let a = 5;
let b = 3;

console.log("5 + 3 =", a + b); //Addition

a = 10
b = 2

console.log("10 - 2 =", 10 - 2); //Subtraction

a = 2;
b = 4;

console.log("4 * 2 =", 4 * 2); //Multiplication

a = 16;
b = 2;

console.log("16 / 2 =", 16 / 2); //Division


//QUESTION 09:
//FavoriteNumber: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let favNum : number = 9;
let msg : string = `My favourite number is ${favNum}`;
console.log(msg);




//QUESTION 10:
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
 
/* -
NAME : ALINA FATIMA
DATE : 25 Feb 2024

This program is about changing your name cases to lower,Upper and Title.
In Coding Whenever we need to change the case of letters we use specific methods that
are inbuilt in Vs code. */

let write : string = "MURTAZA"

//to upper case:
console.log(write.toUpperCase());

//to lower case:
console.log(write.toLowerCase());

 //to title case:
console.log(write.charAt(0).toUpperCase() + write.slice(1).toLowerCase());

























