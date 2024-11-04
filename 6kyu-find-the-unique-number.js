function findUniq(arr) {
    const count = {};

    for (let num of arr) {
        count[num] = (count[num] || 0) + 1;
    }

    for (let key in count) {
        if (count[key] === 1) {
            return Number(key);
        }
    }
}
