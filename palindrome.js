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

    // process content functioanlize the lowercase portion
    this.processor = function(string) {
        return string.toLowerCase();
    }

    // Returns content processed for palindrome testing.
    this.processedContent = function processedContent() {
        return this.processor(this.content);
    }

    // Returns true for a pailindrome, false otherwise.
    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
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
        return this.processor(this.translation);
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