function DNAtoRNA(dna) {
    const dnaPairs = {
        T: "U",
    };

    return dna
        .split("")
        .map((item) => (item === "T" ? dnaPairs[item] : item))
        .join("");
}
