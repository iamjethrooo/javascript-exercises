const repeatString = function(word, num) {
    if (num < 0) {
        return "ERROR"
    }
    let repeatedString = '';
    for (var i = 0; i < num; i++) {
        repeatedString += word;
    }
    return repeatedString;



}

module.exports = repeatString