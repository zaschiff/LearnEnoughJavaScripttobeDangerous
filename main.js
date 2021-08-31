// node syntaxt to obtain another JavaScript file
let Phrase = require("zaschiff-palindrome");

// function to test for a plaindrome through the webpage
function palindromeTester(event) {
    event.preventDefault();
    let phrase = new Phrase(event.target.phrase.value);
    let palindromeResult = document.querySelector("#palindromeResult");

    if (phrase.palindrome()) {
        palindromeResult.innerHTML = `<strong>"${phrase.content}" is a palindrome!</strong>`;
    } else {
        palindromeResult.innerHTML = `<strong>"${phrase.content}" is not a palindrome.</strong>`;
    }
};

// allows file to wait until the DOm is loaded
document.addEventListener("DOMContentLoaded", function() {
    // obtaining the button itself from the DOM and checking for an event to fire
    let tester = document.querySelector("#palindromeTester");
    tester.addEventListener("submit", function(event) {
        palindromeTester(event);
    });
});