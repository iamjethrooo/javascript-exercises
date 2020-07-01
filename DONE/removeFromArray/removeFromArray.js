const removeFromArray = function(array, ...remove) {
    for (let i = 0; i < remove.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] === remove[i]) {
                array.splice(j, 1);
            }
        }
    }
    return array;
}

module.exports = removeFromArray