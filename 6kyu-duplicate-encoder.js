function duplicateEncode(word) {
    word = word.toLowerCase();

    const charCount = {};

    for (let char of word) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    return word
        .split("")
        .map((char) => (charCount[char] > 1 ? ")" : "("))
        .join("");
}
