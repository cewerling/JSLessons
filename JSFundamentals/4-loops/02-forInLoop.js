/*
let student = {
    name: 'Chris',
    awesome: true,
    degree: 'JavaScript',
    week: 1
}

for ( x in student ) {
    console.log('Key => ', x);
    console.log('Value => ', student[x]);
}


let catArray = ['saimese', ' tabby', 'feral', 'sphynx', 'lazy'];

for (x in catArray) {
    console.log('Key => ', x);
    console.log('Value => ', catArray[x]);    
}
*/


// Challenge:
/*
let studentName = 'dOllPH';
let studentNameArr = studentName.split("");

for (char in studentNameArr) {
    if (char = 0) {
        console.log(studentNameArr[char].toUpperCase());
    } else {
        console.log(studentNameArr[char].toLowerCase());
    }
}
*/

let studentName = 'dOllPH';
let newName = '';

for (char in studentName) {
    if (char > 0) {
        newName = newName + studentName[char].toLowerCase();
    } else {
        newName = newName + studentName[char].toUpperCase();
    }
}
console.log(newName);