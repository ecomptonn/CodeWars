function accum(s) {
    return [...s]
        .map(
            (elem, index) =>
                elem.toUpperCase() + elem.toLowerCase().repeat(index)
        )
        .join("-");
}
