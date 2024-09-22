function countPositivesSumNegatives(input) {
    let positives = 0;
    let negatives = [];

    if (input === null) return [];

    for (let num of input) {
        if (num > 0) {
            positives++;
        } else {
            negatives.push(num);
        }
    }

    negatives = negatives.reduce((acc, c) => acc + c, 0);

    if (positives === 0 && negatives === 0) return [];
    return [positives, negatives];
}
