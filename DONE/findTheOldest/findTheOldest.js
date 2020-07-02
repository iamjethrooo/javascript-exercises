let findTheOldest = function(people) {
	const oldest = people.sort(function(a, b) {
		if (!a.yearOfDeath) {
			a.yearOfDeath = 2022;
		}
		if (!b.yearOfDeath) {
			b.yearOfDeath = 2022;
		}
		const lastGuy = a.yearOfDeath - a.yearOfBirth;
		const nextGuy = b.yearOfDeath - b.yearOfBirth;
		return lastGuy > nextGuy ? -1 : 1;
	});

	return oldest[0];
}

module.exports = findTheOldest
