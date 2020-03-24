let outer = cb => {
    console.log('Before the callback');
    cb();
}

let inner = () => {
    console.log('I am the callback');
}

outer(inner);
