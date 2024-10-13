function wave(str) {
    let result = [];
    let currentStr = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            currentStr =
                str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
            result.push(currentStr);
        }
    }

    return result;
}
