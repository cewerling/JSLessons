const api_key = 'ZhIBNntSTkpSwdHfiEhx8uDw4qxahaQ9FdrPlY1v';
const url = 'https://api.nasa.gov/planetary/apod?api_key=' + api_key;

fetch(url)
    .then(result => {
        console.log(result);
        return result.json();
    })
    .then(json => {
        console.log(json);
        console.log('done');
    })
    .catch(err => {
        console.log(err);
    })