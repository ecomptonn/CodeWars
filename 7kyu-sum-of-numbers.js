function getSum(a, b) {
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    return ((max - min + 1) * (max + min)) / 2;
}
