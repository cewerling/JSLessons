
let promise = new Promise(( resolve, reject ) => {
    setTimeout( () => {
        if (true) {
            resolve('Success');
        } else {
            reject('Failure');
        }
    }, 3000 );
});

promise
    .then(result => {
        return result + ' this is the first .then method';
    })
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    })

console.log('I should be last!');