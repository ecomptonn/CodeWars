function sameCase(a, b) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (!alphabet.includes(a) || !alphabet.includes(b)) {
        return -1;
    } else if (
        (a === a.toLowerCase() && b === b.toLowerCase()) ||
        (a === a.toUpperCase() && b === b.toUpperCase())
    ) {
        return 1;
    } else {
        return 0;
    }
}
