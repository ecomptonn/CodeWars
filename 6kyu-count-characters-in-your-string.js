function count(string) {
    const count = {};

    for (let letter of string) {
        if (count[letter]) {
            count[letter]++;
        } else {
            count[letter] = 1;
        }
    }

    return count;
}
