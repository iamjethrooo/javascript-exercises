let findTheOldest = function(people) {
	const oldest = people.sort((a, b) => {
		const lastGuy = a.yearOfDeath - a.yearOfBirth;
		const nextGuy = b.yearOfDeath - b.yearOfBirth;
		lastGuy > nextGuy ? -1 : 1;
	});
}

module.exports = findTheOldest
