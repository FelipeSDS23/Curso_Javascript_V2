let arr = [1, 2, 3]
console.log(arr.reverse())  //modifica original


const soma = arr.reduce((ac, el, i, array) => {
    ac += el;
    return ac
}  )

console.log(soma)

