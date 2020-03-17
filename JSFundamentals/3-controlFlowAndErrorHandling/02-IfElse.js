
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

if (name[0] === name[0].toUpperCase()) {
    let fixedString = name[0] + name.slice(1).toLowerCase();
    console.log(fixedString);
} else {
    let firstLetter = name[0].toUpperCase();
    let restOfName = name.slice(1).toLowerCase();
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
*/
/*
if (lastName.charAt(0) >= 'A' && lastName.charAt(0) <= 'Z'){
    console.log(lastName.charAt(0));
    else {
        console.log(lastName.substring(1,lastName.length-1);
    }
}
*/