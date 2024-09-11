function oddOrEven(array) {
    const result = array.reduce((acc, c) => acc + c, 0);
    if (result % 2 === 0) return "even";
    return "odd";
}
