let arr = [4, 5, 10, 20, 35, 4, 5]

console.log(arr.indexOf(5))
console.log(arr.lastIndexOf(5))
console.log(arr.includes(35))
console.log(arr.find((el) => {
    return el > 10   //retorna primeiro elemento // ou undefined
}))
console.log(arr.findIndex((el) => {
    return el > 10   //retorna indice do primeiro elemento //ou -1
}))

