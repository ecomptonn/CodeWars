function stringClean(s) {
    const numbers = "1234567890";
    return s
        .split("")
        .filter((char) => !numbers.includes(char))
        .join("");
}
