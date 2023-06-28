//ES5
function Animal(tipo) {
    if (tipo) this.tipo = tipo
}

Animal.prototype.obterTipo = function() {
    return this.tipo;
}

Animal.prototype.tipo = "Desconhecido"

const cachorro = new Animal("Mamífero");
const gato = new Animal("Mamífero");
const cobra = new Animal("Reptil");
const peixe = new Animal();


console.log(gato.obterTipo())

const arr = new Array(1, 3, 5);
console.log(arr.__proto__ === Array.prototype)
//Prototype = objeto com funções e propriedades da função construtora (acessado pela função construtora)
//__proto__ = objeto com funções e propriedade herdado da função construtora (acessado pelo objeto instanciado)


//ES6
class AnimalC{
    constructor(tipo){
        if (tipo) {
            this.tipo = tipo
        }
    }

    obterTipo(){
        return this.tipo
    }
}

AnimalC.prototype.tipo = "Desconhecido"

class GatoC extends AnimalC {
    constructor(nome){
        super("mamifero")
        this.nome = nome
    }
}

let animal = new AnimalC("Anfíbio")
let sapo = new AnimalC()
let mingal = new GatoC("Mingal")

console.log(animal)
console.log(mingal)

