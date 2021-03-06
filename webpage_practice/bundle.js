(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"zaschiff-palindrome":2}],2:[function(require,module,exports){
// makes the phrase object usable in other packages
module.exports = Phrase;

// adds 'reverse' to all strings
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}

// Exercise 7.3.1.1: add 'blank' to all strings
String.prototype.blank = function() {
    return !!this.match(/^\s*$/);
}

// Exercise 7.3.1.2: method to return the last element
Array.prototype.last = function() {
    return this[this.length-1];
}

// Defines a Phrase object.
function Phrase(content) {
    this.content = content;

    // Returns content processed for palindrome testing.
    this.processedContent = function processedContent() {
        return this.letters().toLowerCase();
    }

    // Returns the letters in the content
    // for example:
    //     new Phrase("Hello, World!").letters() === "HelloWorld"
    this.letters = function letters() {
        return (this.content.match(/[a-z]/gi) || []).join("");
    }


    // Returns true for a pailindrome, false otherwise.
    this.palindrome = function palindrome() {
        if (this.processedContent()) {
            return this.processedContent() === this.processedContent().reverse();
        } else {
            return false;
        }
    }

    // Exercise 7.1.1.1
    this.louder = function louder() {
        return this.content.toUpperCase();
    }

}

function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;

    // Returns translation processed for palindrome testing.
    this.processedContent = function processedContent() {
        return this.processedContent(this.translation);
    }
}

TranslatedPhrase.prototype = new Phrase();


/*
this was for an earlier exercise:

        function emailParts(email) {
            let atIndex = Array.from(email).indexOf("@");
            let userName = Array.from(email).slice(0, atIndex).join("");
            let domain = Array.from(email).slice((atIndex + 1)).join("");
            
            console.log(userName, domain);
        }
*/
},{}]},{},[1]);
