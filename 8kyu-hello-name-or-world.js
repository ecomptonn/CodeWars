function hello(name) {
    if (!name) {
        return `Hello, World!`;
    } else {
        name = name.charAt(0).toUpperCase() + name.toLowerCase().slice(1);
        return `Hello, ${name}!`;
    }
}
