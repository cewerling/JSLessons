/*
let hi = () => {
    return "hi";
}

let hello = hi();

console.log(hello);

let capName = name => {
    let capitalizedName = '';

    for (let letter in name) {
        if (letter == 0) {
            capitalizedName += name[letter].toUpperCase();
        } else {
            capitalizedName += name[letter].toLowerCase();
        }
    }
    console.log(capitalizedName);
    return capitalizedName;
}

let myName = capName("chRiS");

console.log(myName);
*/

let tipCalc = (bill, rate) => bill*rate;   //{
//    return (bill*rate);
//}

let bill = 35.96;
let tipRate = 15;
let tip = tipCalc(bill, tipRate/100).toFixed(2);

console.log(`A ${tipRate}% tip is $${tip}.`);