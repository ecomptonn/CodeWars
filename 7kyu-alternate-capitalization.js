function capitalize(s) {
    const odd = s
        .split("")
        .map((letter, index) =>
            index % 2 !== 0 ? letter.toUpperCase() : letter
        )
        .join("");
    const even = s
        .split("")
        .map((letter, index) =>
            index % 2 === 0 ? letter.toUpperCase() : letter
        )
        .join("");
    return [even, odd];
}
