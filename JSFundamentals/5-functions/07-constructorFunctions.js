
/* PERSON Model
- Name
- Height
- Age
- canVote
*/

let person1 = {
    name: 'Macy',
    height: 64,
    age: 32,
    canVote: true
}

function Person(name,height,age) {
    this.name = name;
    this.height = height;
    this.age = age;
    this.canVote = age >= 18;

    this.greeting = () => console.log(`Hello, my name is ${ name}`);
    this.birthday = () => this.age++;
}

let person2 = new Person('Chris', 70, 35);
let person3 = new Person('Donovan', 64, 88);

// console.log(person2, person3);

person2.greeting();