//QUESTION 16:

/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list. */

let myGuest = ["Asia", "Hina", "Shabih", "Afroz", "Rida"];

//So we are having a grand dinner so I would like to invite more of my friend.
//let just add Sadiq at begining of my list.
console.log("Add Sadiq at begining")
  myGuest.unshift("Sadiq");
console.log(myGuest);

// let just add Hadi in middle:

console.log("Add Hadi in center")
myGuest.splice(3,0,"Hadi");
console.log(myGuest);

// Let just add Jaffar at end:
console.log("Add Jaffar at end")
myGuest.push("Jaffar")
console.log(myGuest);

 


//QUESTION 17:
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

/*Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/


 myGuest = ["Asia", "Hina", "Shabih", "Afroz", "Rida"];
console.log("I can invite only my two friends")

//let just delete other friends from list:
  let New = myGuest.slice(0 , 2)
console.log(New);

//STEP 2:
 console.log(`I am glad to inform ${New} that you both are still in my list.`)

// STEP 3: PRINT EMPTY LIST
console.log("Empty Array")
  New = myGuest.splice(5);
 console.log(New);






//QUESTION 18:

//Seeing the World: Think of at least five places in the world you’d like to visit.

 let favPlace = ["IRAQ", "IRAN" ,"SAUDI", "TURKEY", "Austrailia"]
 //Print your array in its original order.

 console.log("Original Order")
 console.log(favPlace);


 //• Print your array in alphabetical order without modifying the actual list.
 console.log("Alphabatical Order")
 let organizedArr = favPlace.slice().sort();
 console.log(organizedArr);

 console.log("Origional List:")
 console.log(favPlace);

 //Print your array in reverse alphabetical order without changing the order of the original list.
 console.log("reversed List:")
 let revArr = favPlace.slice().reverse();
 console.log(revArr);

 console.log("Origional List:")
 console.log(favPlace);

 //Reverse the order of your list again. Print the list to show it’s back to its original order.
 console.log("reversed orignal List:")
   favPlace.reverse();
 console.log(favPlace);

 //Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

console.log("Sort in Order:")
   favPlace.sort();
 console.log(favPlace);

 //Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

console.log("Sort in  reverse Order:")
   favPlace.reverse();
 console.log(favPlace);








//QUESTION 19:
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

myGuest = ["Asia", "Hina", "Shabih", "Afroz", "Rida"];

console.log("Number of guest I'm inviting for dinner:")

console.log(myGuest.length);





//QUESTION 20:
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let cityName = ["Karachi", "Lahore", "Islamabad", "Hyderabad", "Muree"];
console.log("List of my fav cities are:")
cityName.forEach((val)=> {
    console.log(val)
;})














