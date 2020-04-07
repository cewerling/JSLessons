const url = 'https://ghibliapi.herokuapp.com/films';
const logoDiv = document.getElementById('logo');
const dataArea = document.getElementById('wrapper');
const logo = document.createElement('img');
logo.src = "https://ghibliapi.herokuapp.com/images/logo.svg";

const cards = document.createElement('div');
cards.classList.add('cards');
cards.style.background

logoDiv.appendChild(logo);
dataArea.appendChild(cards);

const displayMovies = (data) => {
    data.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.backgroundColor = "rgb(138, 196, 255)";
  
        const h1 = document.createElement('h1');
        h1.textContent = movie.title;
        h1.style.backgroundColor = "rgb(0, 128, 255)";
        h1.style.marginTop = "0px";
        h1.style.paddingBottom = "10px";
  
        const desc = document.createElement('p');
        movie.description = movie.description.substring(0, 200);
        desc.textContent = `Description: ${movie.description}...`;
  
        const director = document.createElement('p');
        director.textContent = `Director: ${movie.director}`;
  
        const released = document.createElement('p');
        released.textContent = `Released: ${movie.release_date}`;
  
        const rottenTomato = document.createElement('p');
        rottenTomato.textContent = `Rotten Tomato Score: ${movie.rt_score}%`;
  
        cards.appendChild(card);
        card.appendChild(h1);
        card.appendChild(desc);
        card.appendChild(director);
        card.appendChild(released);
        card.appendChild(rottenTomato);
      })
}


fetch(url)
    .then(result => {
        console.log(result);
        return result.json();
    })
    .then(json => {
        displayMovies(json);
    })
    .catch(err => {
        console.log(err);
    })
