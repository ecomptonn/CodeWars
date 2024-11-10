function sumOfMinimums(arr) {
    return arr.map((nums) => Math.min(...nums)).reduce((acc, c) => acc + c, 0);
}
