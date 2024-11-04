function replace(s) {
    const vowels = "aeiouAEIOU";
    return [...s].map((char) => (vowels.includes(char) ? "!" : char)).join("");
}
