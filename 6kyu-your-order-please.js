function order(words) {
    if (words.length === 0) return words;

    const wordArray = words.split(" ");
    const orderedWords = [];

    for (let i = 0; i < wordArray.length; i++) {
        for (let char of wordArray[i]) {
            if (char >= "1" && char <= "9") {
                orderedWords[char - 1] = wordArray[i];
            }
        }
    }

    return orderedWords.join(" ");
}
