function reverseLetter(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return str
        .split("")
        .filter((letter) => alphabet.includes(letter))
        .reverse()
        .join("");
}
