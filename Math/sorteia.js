function getRandomNumber(inicio = 0, fim = 5, integer = true) {
    let num = Math.random() * 10
    while(num < inicio || num > fim) {
        num = Math.random() * 10
    }
    if (integer) {return Math.round(num)}
    return num 
}

console.log(getRandomNumber(4, 16, false))