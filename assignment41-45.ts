//QUESTION 41:
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


let magician_names: string[] = ["Dynamo", "David", "Harry", "Ricky"]
function Show_magicians(magician: string[]) {
    for(let magician of magician_names) 
{ console.log(magician)}
}
 Show_magicians(magician_names);






//QUESTION 42:
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


function make_great(magician_names: string[]){

magician_names.forEach((val)=> {
   console.log("The great" + val);
})
}
//MODIFIED LIST:
console.log("Modified LIST")
make_great(magician_names)

console.log("Original LIST")
//ORIGINAL LIST:
Show_magicians(magician_names)








//QUESTION 43:
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

console.log("copy of array")

 magician_names = ["Dynamo", "David", "Harry", "Ricky"]
 function make_Great(magician: string[]) {
  let greatMagicians : string[] = [];
magician_names.map((magician)=> {
greatMagicians.push(`${magician} The great`);
});
return greatMagicians;
 }
let greatMagicians = 
make_Great(magician_names.slice());

console.log("Original magicians:")

Show_magicians(magician_names);

console.log("great magicians:")
Show_magicians(greatMagicians);



//QUESTION 44:
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function makeSandwich(...ingredients: string[]) : void{
    if (ingredients.length === 0) {
      console.log("You ordered a plain sandwich.");
    } else {
      console.log("Your sandwich has:");
      for (const ingredient of ingredients) {
        console.log(`${ingredient}`);
      }
    }
  }
  
  makeSandwich();
  makeSandwich("tomato", "cheese", "chicken");
  makeSandwich("olives", "chicken", "lettuce", "egg");









//QUESTION 45:
//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
 
interface Car
{
    manufacturer: string;
    model: string;
    [key: string]: string | number; //key-string,value-string/number
}
  
function createCar(manufacturer: string, model: string, ...options: [string, string | number][]): Car
{
    const car: Car = 
    {
      manufacturer,
      model,
    };
  
    options.forEach(([key, value]) => {
      car[key] = value;
    });
  
    return car;
}
  
const myCar = createCar('Toyota', 'Prado', ['color', 'White'], ['features', 'SUV']);
console.log(myCar);



























