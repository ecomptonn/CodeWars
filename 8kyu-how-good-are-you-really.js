function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((acc, c) => acc + c) / classPoints.length >
        yourPoints
        ? false
        : true;
}
