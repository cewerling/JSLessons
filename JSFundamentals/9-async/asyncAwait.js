/*let myFn = async () => {
    return "Hello there";
}*/

let myFn = () => {
    return Promise.resolve("success");
}

myFn().then(console.log);

/*async function foo() {
    try {
        let response = await fetch("https://random.dog/woof.json");
        let json = await response.json();
        console.log(json);
    } catch(err) {
        window.alert(err);
    }
}

foo(); */

// myFn().then(console.log);

/*myFn()
    .then(data => console.log(data));
    .catch()
*/

/*
async function myFn() {

    let x = await Math.random();
} */