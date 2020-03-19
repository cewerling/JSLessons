
let weather = 50;

if (weather > 50) {
    console.log('No jacket needed!');
} else {
    console.log('Wear a jacket!');
}

// Challenge 1:
/* let name = 'Todd';

if (name === 'Chris'){
    console.log('Hello, my name is ' + name);
} else {
    console.log('Hello, is your name ' + name + '?');
}


if (name === 'Chris'){
    console.log(`Hello, my name is ${name}.`);
} else {
    console.log(`Hello, is your name ${name}?');
} */



// Challenge 2:


let lastName = 'zAchARy';

if (lastName[0] === lastName[0].toUpperCase()) {
    console.log(lastName);
} else {
    console.log("Hey, this isn't written correctly!")
}

if (lastName[0] === lastName[0].toUpperCase()) {
    let fixedString = lastName[0] + lastName.slice(1).toLowerCase();
    console.log(fixedString);
} else {
    let firstLetter = lastName[0].toUpperCase();
    let restOfName = lastName.slice(1).toLowerCase();
    let fullName = firstLetter + restOfName;
    console.log(fullName);
}

/*
if (lastName.charAt(0) >= 'A' && lastName.charAt(0) <= 'Z'){
    console.log(lastName);}
//    else {
//        console.log(`Hey, this isn't written correctly!`);
//    }
}

if (lastName.charAt(0) >= 'A' && lastName.charAt(0) <= 'Z'){
    console.log(lastName.charAt(0));
    else {
        console.log(lastName.substring(1,lastName.length-1);
    }
}
*/



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
