function expandedForm(num) {
    return String(num)
        .split("")
        .map((item, index, arr) => item + "0".repeat(arr.length - index - 1))
        .filter((num) => Number(num) !== 0)
        .join(" + ");
}
