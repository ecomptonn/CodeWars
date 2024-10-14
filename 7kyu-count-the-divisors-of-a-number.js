function getDivisorsCnt(n) {
    let count = 0;
    const sqrtN = Math.sqrt(n);

    for (let i = 1; i <= sqrtN; i++) {
        if (n % i === 0) {
            count += 1; // Count i
            if (i !== n / i) {
                count += 1; // Count n / i if it's different
            }
        }
    }

    return count;
}
