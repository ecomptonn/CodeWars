function invert(array) {
    return array.map((num) => {
        if (parseFloat(num)) {
            return num * -1;
        } else {
            return Math.abs(num);
        }
    });
}
