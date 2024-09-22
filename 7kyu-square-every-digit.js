function squareDigits(num) {
    num = num.toString().split("");
    num = num.map(Number);

    const result = num.map((item) => Math.pow(item, 2));

    return Number(result.join(""));
}
