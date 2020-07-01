const palindromes = function(statement) {
	statement = statement.toLowerCase().replace(/[^a-z]/g, '');
	for (let i = 0, max = statement.length-1; i <= max; i++) {
		if (statement[i] != statement[max - i]) {
			return false;
		}
	}
	return true;
}

module.exports = palindromes
