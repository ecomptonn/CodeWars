function xor(a, b) {
    if (a && b === true) {
        return false;
    } else if (a || b === true) {
        return true;
    } else {
        return false;
    }
}
