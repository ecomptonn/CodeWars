function removeSmallest(numbers) {
    const min = numbers.indexOf(Math.min(...numbers));
    return numbers.filter((item, index, array) => index !== min);
}
