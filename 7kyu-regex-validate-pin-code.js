function validatePIN(pin) {
    const valid = "0123456789";
    if (pin.length === 6 || pin.length === 4) {
        for (let num of pin) {
            if (!valid.includes(num)) {
                return false;
            }
        }

        return true;
    }

    return false;
}
