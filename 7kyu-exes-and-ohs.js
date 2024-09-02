function XO(str) {
    str = str.toLowerCase();
    let Ocount = 0;
    let Xcount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).includes("o")) {
            Ocount++;
        }

        if (str.charAt(i).includes("x")) {
            Xcount++;
        }
    }

    return Ocount === Xcount;
}
