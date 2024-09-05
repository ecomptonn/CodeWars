function opposite(number) {
    if (number === 0) return number;
    if (String(number).includes("-")) {
        const string = String(number).slice(1, number.length);
        return Number(string);
    } else {
        return Number(`-${number}`);
    }
}
