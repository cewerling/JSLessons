// Boolean
let on = true;
console.log(on);

let off = false;
console.log(off);

// Null
let empty = null;

// Undefined;
let walmart = undefined;
// Same as...   let walmart;

// Numbers

let degrees = 90;

let precise = 999999999999999;
console.log(precise);

let toomuch = 9999999999999999n;
console.log(toomuch);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

console.log(typeof(toomuch));

let stringOne = 'single quotes';
let stringTwo = "double quotes";
let stringThree = `backticks`;

// Addition
let first = 1050 + 100;
// String Concatenation
let second = '1050' + '100';

console.log(first, second);

let third = 1050 + '100';

console.log(third);
console.log(typeof third);


// Challenge

let firstName = 'Chris';
let lastName = 'Werling';
let houseNumber = 1010;
let aptNumber = '';
let street = 'Wolverton Dr';
let city = 'Noblesville';
let state = 'IN';
let zipcode = 46818;

console.log(firstName + ' ' + lastName);
console.log(houseNumber + ' ' + street);
if (aptNumber !='') {console.log('Apt' + ' ' + aptNumber);}
console.log(city + ', ' + state + ' ' + zipcode);

let address = firstName + ' ' + lastName + ', ' + houseNumber + ' ' + street + ' ' + city +  ', ' + state + ' ' + zipcode;

console.log(' ');
console.log(address);
console.log(' ');


//Object
let firstObject = {
    integer: 50,
    stringOne: 'Hello World!',
    isRemote: true
}

console.log(firstObject);
console.log(typeof firstObject);
console.log(' ');


//Array

let firstArray = ['Spanish', 'English', 'Dutch', 'French'];

console.log(typeof firstArray);
console.log(firstArray[0]);

// test