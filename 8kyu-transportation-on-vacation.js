function rentalCarCost(d) {
    let sum = 0;
    for (let i = 0; i < d; i++) {
        sum += 40;
    }

    if (d >= 7) {
        sum -= 50;
    } else if (d >= 3) {
        sum -= 20;
    }

    return sum;
}
