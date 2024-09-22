function duplicateCount(text) {
    if (text.length === 0) return 0;

    text = text.toLowerCase();
    let letterCount = {};

    for (let letter of text) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    }

    let duplicates = 0;
    for (let count of Object.values(letterCount)) {
        if (count > 1) duplicates++;
    }
    return duplicates;
}
