function pipeFix(numbers) {
    if (numbers.length === 1) return numbers;

    let result = [];

    for (let i = numbers.shift(); i <= numbers[numbers.length - 1]; i++) {
        result.push(i);
    }

    return result;
}
