function longest(s1, s2) {
    const combine = s1 + s2;
    return combine
        .split("")
        .sort()
        .filter((item, index, array) => item !== array[index - 1])
        .join("");
}
