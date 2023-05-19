const numeros = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9]

const numerosUnicos = numeros.reduce((ac, valor) => {
    if(!ac.includes(valor)){
        ac.push(valor)
    }
    return ac
}, [])

console.log(numerosUnicos)