// Reverse a string
function reverse(string) {
    return Array.from(string).reverse().join("");
}

// Returns true for a pailindrome, false otherwise.
function palindrome(string) {
    let processedContent = string.toLowerCase();
    return processedContent === reverse(processedContent);
}

function emailParts(email) {
    let atIndex = Array.from(email).indexOf("@");
    let userName = Array.from(email).slice(0, atIndex).join("");
    let domain = Array.from(email).slice((atIndex + 1)).join("");
    
    console.log(userName, domain);
}