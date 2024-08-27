function tribonacci(signature, n) {
    if (n === 1) return [signature.shift()];
    if (n === 0) return [];
    for (let i = 3; i < n; i++) {
        signature[i] = signature[i - 1] + signature[i - 2] + signature[i - 3];
    }

    return signature;
}
