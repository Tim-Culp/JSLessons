/*
* Challenge (Strings):
Pig Latin:
Create a function that takes in strings
In the function, translate a phrase into pig latin and print both the original and pig latin version to the console.
If able to do so, return the value into another variable and print that variable
What is Pig Latin?
    * If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
    * If the word begins with a vowel, simply add an 'ay' at the end of the word
*/

/* let pigLatinizeOneWord = (string) => {
    let firstLetter = string[0];
    let restOfWord = string.substr(1, string.length-1);
    if (firstLetter.toLowerCase() !== "a" && firstLetter.toLowerCase() !== "e" && firstLetter.toLowerCase() !== "i" && firstLetter.toLowerCase() !== "o" && firstLetter.toLowerCase() !== "u") {
        return `${restOfWord} ${firstLetter}ay`; 
    } else {
        return `${string}`
    }
} */

let capitalize = word => {
    if (word.length > 1) {
        return word[0].toUpperCase() + word.substring(1, word.length).toLowerCase();
    } else {
        return word[0].toUpperCase();
    }
}

const vowels = ["a", "e", "i", "o", "u"];



const pigLatinize = (string) => {
    //break the string down into a list of words
    let words = [];
    let pigwords = [];
    let searchIndex = 0;
    let prevSearchIndex = 0;
    while (searchIndex != -1) {
        searchIndex = string.indexOf(" ", searchIndex + 1);
        if (searchIndex != -1) {
            words.push(string.substring(prevSearchIndex, searchIndex));
            prevSearchIndex = searchIndex + 1;
        } else {
            words.push(string.substring(prevSearchIndex, string.length));
        }
    }
    
    
    //find the first few consonants of the words
    for( i in words ) {
        let firstPart = "";
        let restOfWordIndex = 0;

        for (j in words[i]) {
            if (vowels.includes(words[i][j].toLowerCase())) {
                //adds the piglatin "w" for vowel words
                if (j == 0) {
                    words[i] += "w";
                }
                break;
            } else {
                firstPart = firstPart + words[i][j];
                restOfWordIndex = parseInt(j) + 1;
            }
        }


    //put the rest of each word into a variable
        let restOfWord = "";
        if (restOfWordIndex > words[i].length) {
            restOfWordIndex = words[i].length;
        }
        restOfWord = words[i].substring(restOfWordIndex, words[i].length);
    
    
        //put the piglatinized versions of the words into an array with proper capitalization
        if (i == 0) {
            pigwords.push(`${capitalize(restOfWord)}${firstPart.toLowerCase()}ay`);
        } else {
            pigwords.push(`${restOfWord.toLowerCase()}${firstPart.toLowerCase()}ay`);
        }
        
    }
    //log the original,then...    
    console.log("Original:", string);
    
    //return the piglatinized phrase
    return pigwords.join(" ");
}


console.log(pigLatinize("I take a potato chip and then I will eat it"));