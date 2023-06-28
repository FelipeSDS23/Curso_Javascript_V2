function Animal(tipo) {
    if (tipo) this.tipo = tipo;
}

Animal.prototype.obterTipo = function() {
    return this.tipo;
}

Animal.prototype.tipo = "Desconhecido";

function Cachorro(nome, tipo) {
    this.nome = nome;
    Animal.call(this, tipo);
    // this.constructor = Cachorro;
    Object.defineProperty(Cachorro.prototype, "constructor", {
        value: Cachorro,
        enumerable: false
    })
}

Cachorro.prototype = new Animal()

let rex = new Cachorro("Rex", "Mamifero");
console.log(rex);





// hasOwnProperty verifica se o objeto tem uma propriedade / método (não considera propriedades e metodos da cadeia de prototypes)
for (let prop in rex) {
    if (rex.hasOwnProperty(prop)){
        console.log(prop);
    }
}

// instanceof verifica se o objeto é instancia da função construtora (considera a cadeia de prototypes)
console.log(rex instanceof Cachorro)

//Verifica o prototype do objeto instanciado
console.log(Object.prototype.isPrototypeOf(rex))

//Retorna prototype do objeto instanciado
console.log(Object.getPrototypeOf(rex))