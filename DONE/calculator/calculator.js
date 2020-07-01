function add (x, y) {
	return x + y;
}

function subtract (x, y) {
	return x - y;
}

function sum (array) {
	let sum = 0;
	array.forEach(number => {
		sum += number;
	});
	return sum;	
}

function multiply (array) {
	let product = 1;
	array.forEach(number => {
		product *= number;
	});
	return product;
}

function power(x, y) {
	for (let i = y, n = x; i > 1; i--) {
		x *= n;
	}
	return x;
}

function factorial(x) {
	return x > 0 ? x * factorial(x - 1) : 1;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}