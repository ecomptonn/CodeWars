function uniqueInOrder(sequence) {
    const result = [];

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] !== sequence[i - 1]) {
            result.push(sequence[i]);
        }
    }

    return result;
}
