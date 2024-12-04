function stairsIn20(s) {
    return 20 * s.reduce((acc, s) => acc + s.reduce((s, n) => s + n, 0), 0);
}
