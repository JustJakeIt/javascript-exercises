const palindromes = function (string) {
    //lower case of string and removes non alphanumeric chars
    let reg= /[\W]/g;
    let lowCase = string.toLowerCase().replace(reg,'');
    // turn lowercase letter string into array, reverse array, join array back together
    let reverse = lowCase.split('').reverse().join('');
    // compare
    return reverse === lowCase ? true : false;



};
// npm test palindromes.spec.js
// Do not edit below this line
module.exports = palindromes;
