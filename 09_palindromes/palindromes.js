const palindromes = function (string) {
    string = remove(string);
    string = string.toLowerCase();
    return string === Array.from(string).reverse().join("");    
};

function checkPunctuationOrSpace(char) {
    const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ '; 
    return punctuation.includes(char); 
}

function remove(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        character = str.charAt(i);
        if (!checkPunctuationOrSpace(character)) {
            result += character;
        }
    }
    return result;
}

// Do not edit below this line
module.exports = palindromes;
