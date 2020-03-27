const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'MAZu0z0ZH6Zy22rekn8Nv5YkQoi2ODGz';
let url;

//SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const results = document.querySelector(".results");

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

// nav.style.display = 'none';         // CHALLENGE CHANGE
nextBtn.style.display = 'none';        // CHALLENGE ADDITION
previousBtn.style.display = 'none';    // CHALLENGE ADDITION
let pageNumber = 0;
let displayNav = false;

searchForm.addEventListener('submit', fetchResults); 
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

function fetchResults(e){
    e.preventDefault();
    // Assemble the full URL
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
    if(startDate.value !== '') {
        url += '&begin_date=' + startDate.value;
    };
    if(endDate.value !== '') {
        url += '&end_date=' + endDate.value;
    };
    console.log(url);
    
    fetch(url)
        .then(function(result) {
        // Tried to figure out how to deal with a 429 (Too Many Requests) error.
        if (result.status == 429) {
            displayError();
        } else {
        return result.json();
        }
    }).then(function(json) {
        displayResults(json);
    }).catch(
    );
}

function displayResults(json) {
    while(section.firstChild) {
        section.removeChild(section.firstChild);
    }

    let articles = json.response.docs;

    // CHALLENGE CHANGE - Need to change this to what is just below.
    // if(articles.length === 10) {
    //     nav.style.display = 'block'; //shows the nav display if 10 items are in the array
    // } else {
    //     nav.style.display = 'none'; //hides the nav display if less than 10 items are in the array
    // }

    // CHALLENGE ADDITION
    if(articles.length === 10) {
        nextBtn.style.display = 'block'; //shows the nav Next Button if 10 items are in the array
    } else {
        nextBtn.style.display = 'none'; //hides the nav Next Button if less than 10 items are in the array
    }

    // CHALLENGE ADDITION
    if(pageNumber > 0) {
        previousBtn.style.display = 'block'; //shows the nav Previus Button if we are on Page 2 or more
    } else {
        previousBtn.style.display = 'none'; //hides the nav Previus Button if we are on Page 0 or 1
    }

    if(articles.length === 0) {
        console.log("No results");
    } else {
        for(let i = 0; i < articles.length; i++) {
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');

            let current = articles[i];
      
            link.href = current.web_url;
            link.textContent = current.headline.main;
      
            para.textContent = 'Keywords: ';

            for(let j = 0; j < current.keywords.length; j++) {
              let span = document.createElement('span');
              span.textContent += current.keywords[j].value + ' ';
              para.appendChild(span);
            }
      
            if(current.multimedia.length > 0) {
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                img.alt = current.headline.main;
            }        

            clearfix.setAttribute('class','clearfix');
      
            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(img);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
        }
    }
};

function nextPage(e) {
    pageNumber++;
    fetchResults(e);
}

function previousPage(e) {
    if(pageNumber > 0) {
        pageNumber--;
      } else {
        return;
      }
      fetchResults(e);
}

function displayError() {
    console.log('You are going TOO FAST.  PLEASE SLOW DOWN!  NYT doesn\'t like you anymore!');
    while(section.firstChild) {
        section.removeChild(section.firstChild);
    }
    let errorMsg = document.createElement('h3');
    errorMsg.textContent = 'You are going TOO FAST.  PLEASE SLOW DOWN!  NYT doesn\'t like you anymore!  Wait 1 minute, then try searching again.'
    results.appendChild(errorMsg);
}