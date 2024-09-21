function solution(string) {
    return string
        .split("")
        .map((char) => (char !== char.toLowerCase() ? ` ${char}` : char))
        .join("");
}
