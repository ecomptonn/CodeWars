function countSheeps(sheep) {
    if (sheep.length === 0 || sheep === null) return 0;

    let count = 0;
    for (let i = 0; i < sheep.length; i++) {
        if (sheep[i] === true) {
            count++;
        }
    }

    return count;
}
