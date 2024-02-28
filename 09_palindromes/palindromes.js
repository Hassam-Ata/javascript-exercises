const palindromes = function (string) {
    const original = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = original.split("").reverse().join("");
    return reversed === original;
};

// Do not edit below this line
module.exports = palindromes;
