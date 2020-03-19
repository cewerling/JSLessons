
let x = 8;

x > 0 
    ? console.log('positive')
    : console.log('negative or zero');

/* Equivalent:
if (x>0){
    console.log('positve');
else {
    console.log('negative');
}
*/

/*
if (x === 0) {
    console.log('hello');
} else if (x<0) {
    console.log('hi');
} else {
    console.log('goodbye');
}
*/

/*
// Equivalent:

x === 0
    ? connsole.log('hello')
    : x < 0
        ? console.log('hi')
        : console.log('goodbye');
*/


// Challenge:

let age = 23;

age <= 17
    ? console.log('Sorry, you\'re too young to do anything')
    : age < 21
        ? console.log('Yay!  You can vote!')
    : age <=24
        ? console.log('Yay! You can drink!')
    : console.log('Yay!  You can rent a car!');




/*
let age = 23;

if (age <= 17) {
    console.log('Sorry, you\'re too young to do anything.');
} else if (age < 21) {
    console.log('Yah!  You can vote!');
} else if (age <=24){
    console.log('Yay!  You can drink!');
} else {
    console.log('Yay!  You can rent a car!');
}
*/

