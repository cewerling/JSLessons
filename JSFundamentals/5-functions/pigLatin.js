/* My solution, which I didn't change before Adam started:

let english = 'This is english'
let pigLatin = translatePigLatin(english);
console.log(`English: ${english}`);
console.log(`Pig Latin: ${pigLatin}`)

function translatePigLatin(english) {
    //Initial definitions
    let pigLatin = '';
    let len = pigLatin.length;
    let words = [];
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    x = 0;

    // Loop through phrase, get words, and put them in array called "words".
    while (x < len) {
        let nextSpace = pigLatin.indexOf(' ');
        let word = pigLatin.substr(x, nextSpace);
        words.push(word);
        x = nextSpace + 1;
    }
    
    // Loop through the words (the array)
    for (word of words){
        // Put the word into an array so we can manipulate the word easily.
        let wordArr = word.split('');
        // Determine if the first char of this word is a consonant

        if (!(vowels.includes(wordArr[0].toLowerCase()))) {
            word.shift(word);
            word.push(wordArr[0]);
        }

        pigLatinWord = 

    }
    




    for (char of english) {
        if char 
    }


    return pigLatin;
}

// End of the start to my solution
*/


// Adam's soluton:

let test = 'And the world turns and is great';

const pigLatin = (toChange, firstWord) => {
    console.log(`Previous: ${toChange}`);
    // Split the word into an array of characters
    let modified = toChange.split('');
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // CHange the string if it is a vowel
    if (!(vowels.includes(modified[0].toLowerCase()))) {
        // Take the first consonant, check if there are more until we hit a vowel.
        //Throw them at the end of the word (in order)
//        console.log(modified);
        do {
            // Take the consonant and throw it at the end of the word
            modified.push(modified.shift().toLowerCase());
        // Loop through word.
        } while(!(vowels.includes(modified[0].toLowerCase())));
        //First character to uppercase
        modified[0] = firstWord ? modified[0].toUpperCase() : modified[0];
//        modified[0] = modified[0].toUpperCase();
        // Combines the array of characters into a single string
        modified = modified.join('');
        // Adds 'ay' to the end
        modified += 'ay';
        console.log(modified);
    } else {
        modified = modified.join('') + 'way';
        console.log(modified);
    }
    return modified;
}

const pigSentence = ( toChange ) => {

    let modified = [];
    toChange.split(' ').forEach((word, index) => {
        modified.push( pigLatin(word, index === 0) );
    })
    modified = modified.join(' ');
    console.log(modified);

}

//pigLatin('And');
pigSentence(test);
//pigLatin('This');
//pigLatin('String');
