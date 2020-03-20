/*
function greeting() {
    console.log('Hello, friend');
}

let hal = function() {
    console.log('I\'m sorry Dave, but I cannot do that');
}

greeting();
greeting();

hal();
*/

let arr = ['this', 'is', 'really', 'cool'];

console.log('');
listValues();
console.log('');

function listValues() {
    for (x in arr) {
        console.log(arr[x]);
    }
}

function listValues() {
    for (x of arr) {
        console.log(x);
    }
}
