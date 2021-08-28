let states = ["Kansas", "Nebraska", "North Dakota","South Dakota"];

// Returns a URL-friendly version of a string
//  Example: "North Dakota" -> "north-dakota"
function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-");
}

// Returns full url with the correct state url form
function fullUrl(string) {
    return `https://example.com/${urlify(string)}`;
}

// urls: Imperative version
function imperativeUrls(elements) {
    let urls = [];
    elements.forEach(function(element) {
        urls.push(urlify(element));
    });
    return urls;
}
console.log(imperativeUrls(states));

// urls: Functional Version
function functionalUrls(elements) {
    return elements.map(element => fullUrl(element));
}
console.log(functionalUrls(states));

// singles: imperative version
function imperativeSingles(elements) {
    let singles = [];
    elements.forEach(function(element) {
        if (element.split(/\s+/).length === 1) {
            singles.push(element);
        }
    });
    return singles;
}
console.log(imperativeSingles(states));

// singles: functional version
function functionalSingles(elements) {
    return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

// EXERCISE 6.2.1
function functionalDoubles(elements) {
    //return elements.filter(element => element.toLowerCase().includes("dakota"));
    return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(functionalDoubles(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: imperative version
function imperativeSum(elements) {
    let total = 0;
    elements.forEach(function(n) {
        total += n;
    });
    return total;
}
console.log(imperativeSum(numbers));

// sum: functional version
function functionalSum(elements) {
    return elements.reduce((total, n) => {return total += n;});
}
console.log(functionalSum(numbers));

// lengths: imperative solution
function imperativeLengths(elements) {
    let lengths = {};
    elements.forEach(function(element) {
        lengths[element] = element.length;
    });
    return lengths;
}
console.log(imperativeLengths(states));

// lengths: functional solution
function functionalLengths(elements) {
    return elements.reduce((lengths, element) => { 
        lengths[element] = element.length; 
        return lengths;
    }, {});
}
console.log(functionalLengths(states));

// Exercise 6.3.4.1
function functionalSum(elements) {
    return elements.reduce((total, n) => {return total *= n;}, 1);
}
console.log(functionalSum(numbers));