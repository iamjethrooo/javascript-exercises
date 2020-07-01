const sumAll = function(base, max) {
	if (typeof base !== 'number' || typeof max !== 'number') {
		return "ERROR"
	}

	if (base < 0 || max < 0) {
		return "ERROR"
	}

	if (base > max) {
		// Swap values
		[base, max] = [max, base]
	}

	for (let i = base + 1; i <= max; i++) {
		base += i;
	}
	return base;

}

module.exports = sumAll
