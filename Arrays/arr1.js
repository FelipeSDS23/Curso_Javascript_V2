const arr = [1, 5, 10, "ola", true]


let soNumeros = arr.every((value) => {
    return typeof(value) === "number" 
})

console.log(soNumeros)

let algumNumero = arr.some((value) => {
    return typeof(value) === "number" 
})

console.log(algumNumero)


let arr2 = []
arr.forEach((el, i, _arr) => {
    if(typeof(el) === "number"){
        arr2.push(el)
    }
})
console.log(arr2)