function sumDigits(number) {
    return String(number)
        .split("")
        .filter((num) => !isNaN(num))
        .map(Number)
        .reduce((acc, c) => acc + c, 0);
}
