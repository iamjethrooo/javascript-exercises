const fibonacci = function(number) {
    if (number < 1) {
        return "OOPS";
    }
    if (typeof number !== 'number') {
        number = parseInt(number);
    }

    let fibonacciArray =[1, 1];
    for (let i = 2; i <= number; i++) {

        fibonacciArray[i] = fibonacciArray[i-2] + fibonacciArray[i-1];
    }
    return fibonacciArray[number-1];

}

module.exports = fibonacci