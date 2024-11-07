function take(arr, n) {
    if (n > arr.length) return arr;
    let pushed = [];
    arr.map((item, index) => (index < n ? pushed.push(item) : item));
    return pushed;
}
