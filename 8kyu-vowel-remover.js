function shortcut(string) {
    const vowels = `aeiou`;
    return string
        .split("")
        .filter((char) => !vowels.includes(char))
        .join("");
}
