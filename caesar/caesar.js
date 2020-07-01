const caesar = function(word, shift) {
    Array.from(word).forEach((letter) => {
        letter += shift;
    });
    return word;
}

module.exports = caesar