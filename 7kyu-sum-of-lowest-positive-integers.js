function sumTwoSmallestNumbers(numbers) {
    const min1 = numbers.sort((a, b) => a - b)[0];
    const min2 = numbers.sort((a, b) => a - b)[1];
    return min1 + min2;
}
