String.prototype.toJadenCase = function () {
    return this.split(" ")
        .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
        .join(" ");
};
