function minValue(values) {
    return parseInt(
        values
            .sort((a, b) => a - b)
            .filter((num, index, array) => num !== array[index + 1])
            .join("")
    );
}
