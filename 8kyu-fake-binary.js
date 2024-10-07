function fakeBin(x) {
    let result = "";

    for (let num of x) {
        if (num < "5") {
            result += 0;
        } else {
            result += 1;
        }
    }

    return result;
}
