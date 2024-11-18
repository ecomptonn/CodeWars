function capitalizeWord(word) {
    return [...word]
        .map((char, index) => (index === 0 ? char.toUpperCase() : char))
        .join("");
}
