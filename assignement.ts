// 1.Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var a: string = "Hello usama, would you like to learn some typescript today?";
console.log(a);

//2.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let myName: string = "Muhammad Afzal";
let myuperName: string = myName.toUpperCase();
let mylowerName: string = myName.toLowerCase();
let mytitleName: string = myName.toString();
console.log(myuperName);
console.log(mylowerName);
console.log(mytitleName);

/* 3.Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
 Your output should look something like the following, including the quotation marks:
Albert Einstein once said, “A person who never made a mistake never tried anything new.”*/
let author: string = "Steve Jobs";
let quote: string =
  "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking.";
console.log(`${author} once said, "${quote}`);

/* 4.Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
Then compose your message and store it in a new variable called message. Print your message.*/
let famous_person: string = "Shaikh Saadi R.A";
let Message: string =
  "The best loved by God are those that are rich, yet have the humility of the poor, and those that are poor and have the magnanimity of the rich.";
console.log(`${Message}shaikh Saadi R.A`);

/*5.Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
 Be sure to enclose your operations in print statements to see the results.
You should create four lines that look like this: console.log(5 + 3)*/
console.log(`Additoin: ${5 + 3}`); //Addition
console.log(`subtraction: ${10 - 2}`); //Subtraction
console.log(`Multiplication: ${4 * 2}`); //Multiplication
console.log(`Division ${16 / 2}`); //Division

// 06 Favorite Number: Store your favorite number in a variable.
// Then, using that variable, create a message that reveals your favorite number.
// Print that message.
let favNum: number = 11;
let mymessage: string = "my favourite number is";
console.log(`${mymessage}: ${favNum}`);

/*07 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
 If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. 
 Then write one sentence describing what the program does.*/

/* 08 Names: Store the names of a few of your friends in a array called names.
  Print each person’s name by accessing each element in the list, one at a time.*/
var names: string[] = ["afzal", "noman", "farman", "shahid", "suleman"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// console.log(names[4]);
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

/*12.	Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
 The text of each message should be the same, but each message should be personalized with the person’s name.*/
var names: string[] = ["afzal", "noman", "farman", "shahid", "suleman"];
var message: string = `brother how are you?`;
for (let i = 0; i < names.length; i++) {
  console.log(names[i], message);
}

// 13.	Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let ownArray: string[] = ["motorbike", "cycle", "car", "heavybike"];
let propties: string[] = [
  "want to buy new one",
  "mere pass nahi hy ",
  "is my favourite vehcile for travel",
  "inshallah one day i'll buy",
];
for (let index = 0; index < ownArray.length; index++) {
  console.log(`${ownArray[index]}  ${propties[index]}`);
}

// 14.	Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guests: string[] = ["Noman", "Shahid", "Mian Suleman", "Mian Farman"];
for (let index = 0; index < guests.length; index++) {
  console.log(`Todday I would like to invite ${guests[index]} in Dinner`);
}
/*15.	Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
 You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list*/

//Missing Person
let missingPerson: string = "shahid";
console.log(`Guest who is not coming in Dinner ${missingPerson}`);
// Replace missing person with new person

guests.splice(1, 1, "Rizwan");
console.log(guests);
// print secound set of invitiion message
guests.forEach((guests) => {
  console.log(`I would like to invite  ${guests} in Dinner tonight`);
});

/*16.	More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
guests.forEach((guests) => {
  console.log(
    `I'm iforming you ${guests} you that I found bigger table in dinner so I'm inviting more friends tonight`
  );
}); //Adding one new guest to the beginning of your array.
guests.unshift("Awais");
console.log(guests);
//Adding one new guest in the middle of the Array.
guests.splice(2, 0, "Mujahid");
console.log(guests);
// using append() to add one new guest in the end of Array.
guests.push("Bilal");
console.log(guests);
// Printing new invition line for Each Person.
guests.forEach((guests) => {
  console.log(`Hello Dear ${guests} I'm inviting you in Dinner Tonight`);
});

/*17.	Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
// List shrinking
guests.forEach((guests) => {
  console.log(
    `Hello Dear ${guests} I'm informing you that I'hv space for only two guest at Dinner`
  );
});
// Remove Guests from list
while (guests.length > 2) {
  let removeGuest = guests.pop();
  console.log(
    `I'm Soory ${removeGuest} that you are not invited at Dinner Tonight`
  );
}
//Print a message to each of the two people still on your list
guests.forEach((guests) => {
  console.log(`Hello Dear ${guests} you are still invited at Dinner Tonight`);
});
// Remove last two Name from the list
guests.pop();
guests.pop();
console.log(`Empty list at the end of programm ${guests}`);

/* 18.	Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/
let placesToVisit: string[] = [
  "Turkey",
  "Maldives",
  "Malaysia",
  "Canada",
  "Dubai",
];
// • Print your array in its original order.
console.log(placesToVisit);
// • Print your array in alphabetical order without modifying the actual list.
let modifyArray = [...placesToVisit].sort();
console.log(modifyArray);
//• Show that your array is still in its original order by printing it.
console.log("Original Array", placesToVisit);
//• Print your array in reverse alphabetical order without changing the order of the original list.
let reversModifyArray = [...placesToVisit].reverse().sort();
console.log("Reverse Alphabetical Order ", reversModifyArray);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Reversed Original Array", placesToVisit.reverse());
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(`stored in alphaetical order`, placesToVisit.sort());
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(`stored in reverse alphaetical order`, placesToVisit.reverse());
/*19.	Dinner Guests: Working with one of the programs from Exercises 14 through 18,
 print a message indicating the number of people you are inviting to dinner.*/
console.log(guests.length, "people that i'm inviting in Dinner");
/*20.	Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. 
 Write a program that creates a list containing these items.*/
let foodlist: string[] = ["Pizza", "Burger", "salad", "rice"];
for (let index = 0; index < foodlist.length; index++) {
  console.log(foodlist[index]);
}
/*  21.	They think of something you could store in a TypeScript Object. 
Write a program that creates Objects containing these items.*/
let myobject = {
  Name: "Muhammad Afzal",
  fatherName: "Iqbal yousaf",
  age: 25,
  Student: true,
  course: "Metaverse & webdevlopment",
  Hobbies: ["coding", "traveling"],
};
console.log(myobject);
/*22.	Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
 Change an index in one of your programs to produce an index error.
  Make sure you correct the error before closing the program.*/
  const myArray: number[] = [1, 2, 3, 4, 5];

  // Intentionally access an element at an invalid index
  try {
   let element = myArray[10];
    console.log(`Element at index 10: ${element}`);
  } catch (error) {
    console.error(`An error occurred: ${error}`);
  }
  // Correct the error by accessing a valid index
let validIndex = 2; // Change this to a valid index within the array length
let validElement = myArray[validIndex];
console.log(`Element at index ${validIndex}: ${validElement}`);
/*23.	Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
let age:number = 20
if ((age >= 6 && age <=7 ) || (age >= 18))
{
  console.log('You can vote');
  }else if((age > 18)){
    console.log ('you can drive');
    } else
    {
      console.log ("you cannot do anything")
      };

      /*25.	Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)*/
let alien_color:string = "red";
if(alien_color.includes("green")){
  console.log("You have just earned 5 points");
};
if(!alien_color.includes("green")){
  console.log("you have just earned 5 points");
};
/*26.	Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.*/

//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
if(alien_color.includes("green")){
  console.log("you have just earned 5 points");
};
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
if(!alien_color.includes("yellow")){
  console.log("you have just earned 10 points");
};
//• Write one version of this program that runs the if block and another that runs the else block.
if(alien_color.includes("green")){
  console.log("you have just earned 5 points");
}else{
  console.log("you have just earned 10 points");
};
/*27.	Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
if(alien_color.includes("green")){
  console.log("you have just earned 5 points");
}else if(alien_color.includes("yellow")){
  console.log("you have just earned 10 points");
}else(alien_color.includes("red"))
  console.log("you have just earned 15 points");
/*28.	Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.
• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
• If the person is age 65 or older, print a message that the person is an elder.*/

// • If the person is less than 2 years old, print a message that the person is a baby.
let userAge:number = 25
if(userAge < 2)//If the person is less than 2 years old, print a message that the person is a baby.
{
  console.log("The person is Baby");
} else if(userAge>=2 && userAge<4) //if the person is at least 2 years old but less than 4, print a message that the person is a toddler.
{
  console.log ("the person is Toddler") ;
} else if (userAge>=4 && userAge<13) //If the person is at least 4 years old but less than 13, print a message that the person is kid.
{
  console.log('the person is a kid');   
} else if (userAge>=13 && userAge<20) //If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
{
  console.log ('the person is a Teenage')
} else if (userAge>=20 && userAge<65) 
{
  console.log('the person is Adult');   //If the person is at least 20 years old but less than 65, print a message that the person is an adult.
} 
else if (userAge>=65)
 console.log('the person is Elder'); // If the person is age 65 or older, print a message that the person is an elder.

/*29.	Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/

// Make an array of your three favorite fruits
const favorite_fruits: string[] = ['banana', 'apple', 'strawberry'];

// Write five independent if statements to check for certain fruits
if (favorite_fruits.includes('banana')) {
  console.log("You really like bananas!");
}

if (favorite_fruits.includes('apple')) {
  console.log("You're a fan of apples!");
}

if (favorite_fruits.includes('strawberry')) {
  console.log("Strawberries are one of your favorites!");
}

if (favorite_fruits.includes('orange')) {
  console.log("You enjoy oranges!");
} else {
  console.log("Oranges are not in your favorites.");
}

if (favorite_fruits.includes('grape')) {
  console.log("Grapes are among your favorite fruits!");
} else {
  console.log("Grapes didn't make it to your top three.");
}
/*30.	Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/
let usernames: string[] = ['admin', 'zaid', 'awais', 'usama','uzair']
for (let index=0; index < usernames.length; index++) {
    if (usernames[index] == 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else if (usernames[index] != "admin")
        console.log(`Hello ${usernames[index]}, thank you for log in.`);
    }
/*31.	No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/
var username = ['admin', 'zaid', 'awais', 'usama','uzair']
// • If the list is empty, print the message We need to find some users!
if (username == null) {
    console.log("we need to find users");
};
 // Exercise --32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

let currentUsers:string[]=["mian","umar","hassan","essa","ibrahim"]

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let newUser:string[]=["ali","hamza","wahab","essa","ibrahim"]

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

const currentUsersLower: string[] = currentUsers.map(user => user.toLowerCase());

for (const newUsers of newUser) {
    if (currentUsersLower.includes(newUsers.toLowerCase())) {
        console.log(`Sorry, the username '${newUsers}' is already taken. Please choose a different one.`);
    } else {
        console.log(`The username '${newUsers}' is available.`);
    }
}



                                             // Exercise --33
//  Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.             
//  • Store the numbers 1 through 9 in a array.

let numArray:number[]=[1,2,3,4,5,6,7,8,9];
for (let index = 0; index <= numArray.length; index++) {
   if (index ===1) {
    console.log(`${index}st`);
    
   }else if (index ===2) {
    console.log(`${index}nd`);
    
   }else if (index ===3) {
    console.log(`${index}nd`);
    
   }else if (index ===4) {
    console.log(`${index}th`);
    
   }else if (index ===5) {
    console.log(`${index}th`);
    
   }else if (index ===6) {
    console.log(`${index}th`);
    
   }else if (index ===7) {
    console.log(`${index}th`);
    
   }else if (index ===8) {
    console.log(`${index}th`);
    
   }else if (index ===9) {
    console.log(`${index}th`);
    
   }
    
}
                                        // Exercise --34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
let favPizza:string[]=["BBQ","bhari kabab","mali Boti","pepperoni"];
for (let index = 0; index < favPizza.length; index++) {
    console.log(favPizza[index]);
    
}

// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

for (let index = 0; index < favPizza.length; index++) {
    console.log(`I Like ${favPizza[index]} pizza`);
    
}


// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

console.log("I really love pizza!");

                                               // Exercise --35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animals:string[]=["dog","cow","goat"];
for (const animal of animals) {
    if (animal==="dog") {
        console.log(`A ${animal} would make a great pet.`);
        
    } else if (animal==="cow") {
        console.log(`A ${animal} used to get Milk.`);
        
    }else if (animal==="goat") {
        console.log(`A ${animal} is alos used to get Milk.`);
        
    };
}
console.log("what these animals have in common. ");
console.log("these animal could ba a great pet!");

                                 // Exercise --36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size:any,message:string) {
    console.log(`you order ${size} T-shirt and message  you want to print is "${message}"`);
    
}

make_shirt("large","Prision no 804")

                                             // Exercise --37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function makeShirt(size:any) {
if (size===`large`) {
   console.log("I love TypeScript.");
    
} else if    (size===`medium`) {
    console.log("I love Pakistan.");
}else if    (size===`small`) {
    console.log("I love Prision no 804.");} 
}

makeShirt("large")
makeShirt("medium")
makeShirt("small")

                                             // Exercise --38
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city:string, country:string = `default COuntry`) {
    console.log(`${city} is in ${country}`);
    
}

describe_city("lahore", "pakistan");
describe_city("istanbol", "turkey");
describe_city("amritsar"); //with defaultcountry


                                             //Exercise --39
/* City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.*/


function city_country(city:string, country:string) {
    console.log(`"${city}, ${country}"`);
    
};

city_country("Faislabad","Pakistan");
city_country("Istanbul","Turkey");
city_country("Madina","Sudia Arabia");


//                                       Exercise 40
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.



function make_album(artist :string,album:string,) {
    const output={
        artist,
        album 
    }
    console.log(output);
    
};

make_album("guru","abc");


// function with opitinal perameter
function makeAlbum(artist:string, album:string,tracks?:number) {
    const output={
        artist,
        album,
        tracks
    }
    if (tracks!==undefined) {
        output.tracks= tracks
    }
    return output
}



let myMusic =makeAlbum("harry","xyz",10)
let myMusic2=makeAlbum("harry","xyz",10)
let myMusic3 =makeAlbum("harry","wfffqewf")

console.log(myMusic);
console.log(myMusic2);
console.log(myMusic3);

//                         Exercise 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

const magicianArray:string[]=["Harry ","ALison","Butt","john","Jutt","Mian"]

function show_magicians(megician:string[]) {
  megician.forEach(element => {
    console.log(element);
    
  });
};


show_magicians(magicianArray);


//                                           Exercise 42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

const magician:string[]=["Harry ","ALison","Butt","john","Jutt","Mian"]
function make_great(megician:string[]) {
    megician.forEach(element => {
      console.log(element);
      
    });
  };
  
  
  make_great(magician);

  function show_magician(megician:string[]) {
    const greatMagician:string[]=magician.map(magician=>`the great ${magician}`)
    return greatMagician
  }


  console.log( show_magician(magician));


//                                                Exercise 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

make_great(magician);
const newArray:string[]=["wahab","butt","rana","tayyab"];
show_magician(newArray);


//                                           Exercise 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


function sandwich(items:string[]) {
    console.log("You ordered a sandwich with the following ingredients:");
    for (const item of items) {
    console.log(`- ${item}`);
} 
}

const orderSandwich=["Ham", "Cheese", "Lettuce", "Tomato"];
sandwich(orderSandwich);


//                               Exercise 45
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function infoCar(manufacturer:string,model:any,...properties:any[string][string]) {
    const car:any ={manufacturer,model};
    for (const [key , value] of properties) {
        car [key]=value
    }
    return car
}

const mycar=infoCar("toyta","civic",["color","White"],["extra Feacture","Sun roof"])
console.log(mycar);




