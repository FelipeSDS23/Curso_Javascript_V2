const pessoa = { 
    nome:"felipe"
}

console.log(Object.getOwnPropertyDescriptor(pessoa, "nome"));

Object.defineProperty(pessoa, "sobrenome", {
        value: "silva",
        enumerable: true,
        writable: true,
        configurable: true
})

Object.defineProperties(pessoa, {
    idade: {
        value: 24,
        enumerable: true,
        configurable:true,
        writable: true
    },
    altura: {
        value: 1.71,
        writable: true,
        configurable: true,
        enumerable: true
    }
})

console.log(pessoa)

