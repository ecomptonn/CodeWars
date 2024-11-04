function countSmileys(arr) {
    const smileyFaces = [
        ":)",
        ":D",
        ";)",
        ";D",
        ":-)",
        ":-D",
        ";-)",
        ";-D",
        ":~)",
        ":~D",
        ";~)",
        ";~D",
    ];
    let count = 0;
    for (let char of arr) {
        if (smileyFaces.includes(char)) count++;
    }

    return count;
}
