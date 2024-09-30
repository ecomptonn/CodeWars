function sumMix(x) {
    x = x.map(Number);
    return x.reduce((acc, c) => acc + c, 0);
}
