function addLength(str) {
    const wordsArray = str.split(" ");
    return wordsArray.map((word) => `${word} ${word.length}`);
}
