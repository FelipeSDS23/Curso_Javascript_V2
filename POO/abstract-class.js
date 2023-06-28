class Animal {
    constructor(tipo){

        if (this.constructor === Animal){
            throw new Error("Animal is an abstract class")
        }

        if (tipo) {
            this.tipo = tipo;
        }
    }

    comer() {
        console.log(`${this.tipo} está comendo`)
    }
}

class Gato extends Animal {
    constructor(nome){
        super("mamifero")
        this.nome = nome;  
    }

    comer() {
        console.log(`${this.tipo} está comendo`)
    }
}

// const animal = new Animal("mamifero");
const mingal = new Gato("Mingal")