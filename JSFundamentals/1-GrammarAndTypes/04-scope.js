var x = 12;

function scope () {
    var x = 33;
    if (true){
        let x = 45;
        console.log(x);
    }
    console.log(x);
}

scope();
console.log(x);