let hey = function hi() {
    console.log('Hi');
}

console.log(hey);

let hi = function (){
    console.log('I say')
}

console.log(hi);


fetch('google.com').then(response +> {
    return response.json();
})