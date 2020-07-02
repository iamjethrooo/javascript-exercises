const caesar = function(plaintext, shift) {
    const ALPHABET = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
	// Convert plaintext to array of characters to compare them to alphabet array
	let temp = plaintext.split('');
	plaintext = temp;
	let ciphertext = "";
	if (shift < 0) {
		shift = ALPHABET.length - Math.abs(shift);
	}

	// Removes unnecesssary wrap cycles
	while (shift > 26) {
		shift -= 26;
	}

	for (let i = 0; i < plaintext.length; i++) {
		let c = plaintext[i];
		let needsWrap = (ALPHABET.indexOf(c.toLowerCase()) + shift + 1) > ALPHABET.length;
		let isNotLetter = c.toLowerCase() == c.toUpperCase() || c.trim() == "";
		let isLowercase = ALPHABET.indexOf(c) != -1;

		// If character is not a letter, just add to ciphertext
		if (isNotLetter) {
			ciphertext += c;
			continue;
		}

		// If character is lowercase
		if (isLowercase) {
			if (needsWrap) {
				ciphertext += ALPHABET[ALPHABET.indexOf(c) + shift - ALPHABET.length];
				continue;
			}
			ciphertext += ALPHABET[ALPHABET.indexOf(c) + shift];
			continue;
		} 
		// If character is uppercase
		else {
			c = c.toLowerCase();
			if (needsWrap) {
				ciphertext += ALPHABET[ALPHABET.indexOf(c) +  shift - ALPHABET.length].toUpperCase();
				continue;
			}
			ciphertext += ALPHABET[ALPHABET.indexOf(c.toLowerCase()) + shift].toUpperCase();
			continue;
		}

	}
	return ciphertext;
}

module.exports = caesar