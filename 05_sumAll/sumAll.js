const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2) || typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "ERROR";
    }

    let sum = 0;
    const start = Math.min(num1, num2);
    const end = Math.max(num1, num2);
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

module.exports = sumAll;
