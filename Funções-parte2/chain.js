const calc = {
    value: 0,
    somar(n){
        this.value += n;
        return this;
    },
    subtrair(n){
        this.value -= n;
        return this;
    },
    log(){
        console.log(this.value);
        return this;
    }
}

//Cada método retorna o próprio objeto devido ao return this, se
//não tivesse o return this ele retornaria undefined e não seria possivel
//chamer um método a partir de outro método (encadeamento de métodos)
calc.somar(5).somar(2).subtrair(3).somar(7).log();
