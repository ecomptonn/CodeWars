function sortArray(array) {
    let odd = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] % 2 === 0 ? array[i] : odd.shift());
    }
    return result;
}
