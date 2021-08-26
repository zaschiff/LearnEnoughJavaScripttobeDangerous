// Sonnet string to be searched.
const sonnet = `Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no, it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wand'ring back,
Whose worth's unknown, although his height be taken.
Love's note time's fool, though rosy lips and cheeks
Within his bending sickle's compass come:
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
    If this be error and upon me proved,
    I never wrir, nor no man ever loved.`;

// object to contain unique word count.
//let uniques = {};

// following line code is for 4.5.2 ex 2
let uniques = new Map();

// array after word search and split on the sonnet variable
//let words = sonnet.match(/\w+/g);

// following line fo code is for 4.5.2 ex 1
let words = sonnet.match(/[\w']+/g);

// loop through the words array and either initialize the value 
// of word in the, object unique, to 1 if it did not exist. If
// it exists the value is incremented by 1.
// for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     if (uniques[word]) {
//         uniques[word] += 1;
//     } else {
//         uniques[word] = 1;
//     }
// }

// following loop of code is for 4.5.2 ex 2
for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (uniques.has(word)) {
       let currentCount = uniques.get(word);
        uniques.set(word, currentCount + 1);
    } else {
        uniques.set(word, 1);
    }
}

// Print out the resulting object.
console.log(uniques);