// const api_key = 'ZhIBNntSTkpSwdHfiEhx8uDw4qxahaQ9FdrPlY1v';
//const url = 'https://api.nasa.gov/planetary/apod?api_key=' + api_key;
const url = 'https://api.spacexdata.com/v3/roadster';

const displayData = (data) => {
    const { title, description, apo, peri, distance, speed } = data;  // This is called "destructuring".  The variables have to be the same name as they are inside the json API object.
    let dataArea = document.getElementById('data-area');

    let displayTitle = document.createElement('h1');
    let displayDescription = document.createElement('p');
    let dataCards = document.createElement('div');
    dataCards.classList.add('dataCards');

    const createDataCard = (dataTitle, dataValue) => {
        let dataCard = document.createElement('div');
        dataCard.classList.add('card');
        let divTitle = document.createElement('h3');
        let divValue = document.createElement('p');
        divTitle.innerText = dataTitle;
        divValue.innerText = dataValue;
        dataCard.appendChild(divTitle);
        dataCard.appendChild(divValue);
        return dataCard;
    }

    displayTitle.innerhtml = title;
    displayDescription.innerhtml  = description;

    let apoCard = createDataCard('Apoapsis', `${apo} AU`);
    let periCard = createDataCard('Periapsis', `${peri} AU`);
    let distanceCard = createDataCard('Distance from You', `${distance} km`);
    let speedCard = createDataCard('Current Speed', `${speed} kph`);

    dataCards.appendChild(apoCard);
    dataCards.appendChild(periCard);
    dataCards.appendChild(distanceCard);
    dataCards.appendChild(speedCard);

    dataArea.appendChild(displayTitle);
    dataArea.appendChild(displayDescription);
    dataArea.appendChild(dataCards);

}

fetch(url)
    .then(result => {
        console.log(result);
        return result.json();
    })
    .then(json => {
        // At this point, handle placing data on the screen
        const myData = {
            title: 'Tesla Roadster In Orbit',
            description: json.details,
            apo: json.apoapsis_au,
            peri: json.periapsis_au,
            distance: json.earth_distance_km,
            speed: json.speed_kph
        }

        // Display text data
        displayData(myData);

        // Display Photos
//        displayPhotos();

    })
    .catch(err => {
        console.log(err);
    })