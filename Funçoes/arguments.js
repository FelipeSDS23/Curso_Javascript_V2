function somar() {
    console.log(arguments);
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(somar(1, 2, 3));
console.log(somar(1, 2, 3, 6, 9, 5));
console.log(somar(8, 2, 44));