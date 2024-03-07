
//QUESTION 11:


//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let friends =["Sukaina", "Sareen", "Aynn", "Muntaza", "Tatheer"];
//Applying for loop:

for(let i = 0; i < friends.length; i++){
    console.log("Name of friend is", friends[i])
};

//Can also do by using for-of/for-in loop:

for (let friend of friends) {
    console.log(friend);
}

//also from forEach loop;
friends.forEach((val)=> {
    console.log(val);
})

//QUESTION 12:
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

friends = ["Sukaina", "Sareen", "Aynn", "Muntaza", "Tatheer"];

for (let fab of friends)
{
    console.log(`Hello ${fab}! How are you doing?`);
}




//QUESTION 13:
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let favTransport = ["Lamborghini", "Prado", "Ferrari" , "Audi"];


    console.log(`Once I start earning in dollars as per sir zia, I will definitely buy one of these: \n ${favTransport}.`);

    favTransport.forEach((val)=> {
        console.log(`My favourite car is ${val}` );
    }
    )


//QUESTION 14:
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let myGuest = ["Asia", "Hina","Shabih","Afroz"];

for(let i= 0; i < myGuest.length; i++) {
    console.log(`Hello ${myGuest[i]}, I planned a dinner tonght at home. I'll be honoured if you join. `)
}




//QUESTION 15:

/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list. */

myGuest = ["Asia", "Hina","Shabih","Afroz,Rida"];

console.log(`unfortunately ${myGuest[2]} is unable to join dinner.`);

//Let just invite another guest in replacment of Shabih:

let ab = myGuest.splice(2,1,"Neha"); 
console.log(myGuest);

