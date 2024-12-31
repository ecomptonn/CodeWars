function abbrevName(name) {
    return `${name.toUpperCase().split(" ")[0][0]}.${
        name.toUpperCase().split(" ")[1][0]
    }`;
}
