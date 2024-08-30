function highAndLow(numbers) {
    numbers = numbers.split(" ").map(Number);
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    return `${max} ${min}`;
}
