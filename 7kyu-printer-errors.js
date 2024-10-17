function printerError(s) {
    const count = {};
    const badLetters = "nopqrstuvwxyz";

    for (let char of s) {
        if (badLetters.includes(char)) {
            count[char] = (count[char] || 0) + 1;
        }
    }

    return `${Object.values(count).reduce((acc, c) => acc + c, 0)}/${s.length}`;
}
