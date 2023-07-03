const pai = {
    nome: "pai",
    falar: function(msg){
        console.log(`${this.nome} está falando ${msg}`)
    }
}

const filho = Object.create(pai, {nome: {value:"Junior", enumerable: true}})

const obj1 = {
    a: "valor a",
    b: "valor b",
    c: "valor c"
}

const filha = Object.assign(obj1, filho)

console.log(filha)

console.log(Object.keys(filha))
console.log(Object.values(filha))
console.log(Object.entries(filha))