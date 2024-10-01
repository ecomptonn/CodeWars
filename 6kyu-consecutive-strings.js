function longestConsec(strarr, k) {
    if (k <= 0 || k > strarr.length) return "";

    let longest = "";

    for (let i = 0; i <= strarr.length - k; i++) {
        const currentConcat = strarr.slice(i, i + k).join("");
        if (currentConcat.length > longest.length) {
            longest = currentConcat;
        }
    }

    return longest;
}
