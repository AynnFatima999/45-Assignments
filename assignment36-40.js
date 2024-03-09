"use strict";
//QUESTION 36:
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size, message) {
    return console.log(`I buy a T-shirt of size '${size}' with a text  "${message}".`);
}
make_shirt("Medium", "I love Pakistan");
//QUESTION 37:
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_Shirt(size = "Large", message = "I love Pakistan") {
    return console.log(`size: ${size} , Message:  '${message}'`);
}
console.log("for Large:");
make_Shirt();
console.log("FOR Medium:");
make_Shirt("Medium");
console.log("for Any size:");
make_Shirt("Small", "I'll be a good Programmer");
//QUESTION 38:
//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("karachi");
describe_city("Islamabad");
describe_city("Tehran", "IRAN");
describe_city("Ankara");
//QUESTION 39:
//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
function city_country(city, country) {
    return `${city},${country}`;
}
let call1 = city_country("Lahore", "Pakistan");
let call2 = city_country("Karachi", "Pakistan");
let call3 = city_country("New york", "America");
console.log(`"${call1}" \n "${call2}" \n "${call3}"`);
//QUESTION 40:
//Album: Write a function called make_album() that builds a Object describing a music album.
function make_album(artist, title, tracks) {
    const album = {
        artist,
        title,
        tracks,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Example function calls
const album1 = make_album('Amar khan', 'Hum Tum');
const album2 = make_album('Artist 2', 'Artist 2', 12);
const album3 = make_album('Artist 3', 'Artist 3', 8);
console.log(album1);
console.log(album2);
console.log(album3);
