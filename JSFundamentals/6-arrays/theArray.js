/*
let myList = ['thing1', 'thing2', 'thing3', [1, { key1: 'abc'}, 4]];

myList[3][1].key1;

let colors = [];

// Adding item to the end
console.log(colors);
colors.push('Red');
console.log(colors);
colors.push('Purple');
console.log(colors);

// Removing from the end
let removed = colors.pop();
console.log(colors);
console.log(removed);


let orders = ['Mary', 'Tim', 'Greg', 'Dolph', 'Ashley'];

orders.splice(1, 1, 'Donovan');
orders.splice(3, 0, 'Adam');
console.log(orders);

let shifted = orders.shift();
console.log(orders);
console.log(shifted);

orders.unshift();
console.log(orders);
*/

// let foods = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'HotDog', 'Chana Masala'];

// Ways to print off the elements:
/*
for (let i = 0; i < foods.length; i++) {
    console.log(foods[i]);
}

for (i in foods) {
    console.log(foods[1]);
}

for (food of foods) {
    console.log(food);
} */

/*
foods.forEach(food => console.log(food));

foods.forEach( (x,y,z) => console.log(x,y,z) );

console.log( typeof foods);
console.log( foods instanceof Array );
console.log ( typeof 3 === 'number');
*/


// Challenge:

// My version:
/*
let x = [0,1,2,3,4,5];
//let x = 0;
console.log(x);
x = arrayReverse(x);
console.log(x);

function arrayReverse (Arr) {
    let Arr2 = [];
    if (Arr instanceof Array) {
        for (element of Arr) {
            Arr2.unshift(element);
        }
    return Arr2;
    }
}
*/

// His version:

let x = [0,1,2,3,4,5];

let reverseArray = (toReverse) => {
    if ( toReverse instanceof Array ) {
        toReverse.reverse();
    }
}

reverseArray(x);

x.forEach(input => console.log(input));