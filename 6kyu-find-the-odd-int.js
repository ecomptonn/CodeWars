function findOdd(A) {
    const count = {};

    for (let char of A) {
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }

    for (let key in count) {
        if (count[key] % 2 !== 0) {
            return Number(key);
        }
    }
}
