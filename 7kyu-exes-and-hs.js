function XO(str) {
    str = str.toLowerCase();

    const count = {};

    for (let letter of str) {
        count[letter] = (count[letter] || 0) + 1;
    }

    return count.x === count.o;
}
