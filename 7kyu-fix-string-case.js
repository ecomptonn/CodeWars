function solve(s) {
    const count = {
        uppercase: 0,
        lowercase: 0,
    };

    for (let char of s) {
        if (char !== char.toUpperCase()) {
            count.lowercase++;
        } else {
            count.uppercase++;
        }
    }

    if (count.uppercase === count.lowercase) {
        return s.toLowerCase();
    } else if (count.uppercase > count.lowercase) {
        return s.toUpperCase();
    } else {
        return s.toLowerCase();
    }
}
