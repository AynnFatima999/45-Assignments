//45 ASSIGNMENTS
                                    
//QUESTION 01:
//Done Installations:



//QUESTION 02:
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let fullName : string = "Ali Raza"

console.log("Hello " + fullName + " Would you like to learn some Python today?");
 
//WE CAN ALSO DO THIS BY USING BACKTICKS:

let get: string = `Hello ${fullName}, Would you like to learn some Typescrpt today?`;

console.log(get);


//QUESTION 03:

//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


let you : string = "MURTAZA"

//to upper case:
console.log(you.toUpperCase());

//to lower case:
console.log(you.toLowerCase());

 //to title case:
console.log(you.charAt(0).toUpperCase() + you.slice(1).toLowerCase());



 
 

//QUESTION: 04
 // Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:


// Hazrat Imam Ali as once said, “Lead such a life, that, when you die, the people may mourn you, and while you are alive they long for your company.”


console.log('Hazrat Imam Ali as once said, “Lead such a life, that, when you die, the people may mourn you, and while you are alive they long for your company.”')


//QUESTION 5:
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_Person : string = "Molana Rumi";

let message : string = `${famous_Person} once said; "Everything that is made beautiful and fair and lovely is made for the eye of one who sees."`;

console.log(message);



