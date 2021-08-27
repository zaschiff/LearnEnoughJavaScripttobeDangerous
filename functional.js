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
