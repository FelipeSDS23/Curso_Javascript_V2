//ES5
function Animal(){ }

    Animal.prototype.whoAmI = function() {
        return this;
    }

    Animal.categoria = "Ser vivo";

    const dog = new Animal();

//ES6
class Cachorro {
    constructor(nome){
        this.nome = nome;
    }

    static comer(){
        console.log(this)
        console.log("Comendo");
    }
}

