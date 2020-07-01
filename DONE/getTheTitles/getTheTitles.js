const getTheTitles = function(books) {
	const bookTitles = books.map(book => book.title);
	return bookTitles;
}

module.exports = getTheTitles;
