function gimme(triplet) {
    return triplet.findIndex(
        (item, index) =>
            item > Math.min(...triplet) && item < Math.max(...triplet)
    );
}
