var number = function (array) {
    if (array.length === 0) return array;
    return array.map((item, index) => `${index + 1}: ${item}`);
};
