function criaCachorro(nome) {
    let posicao = 0;
    return {
        nome,
        latir(){
            console.log(`${this.nome} está latindo.`);
        },
        andar(m){
            console.log(`${this.nome} andou ${m} metros`);
            posicao += m;
        },
        get posicao(){
            console.log(posicao);
        }
    }
}

const rex = criaCachorro("Rex");
const toto = criaCachorro("Totó");

rex.latir();
rex.andar(5);
toto.latir();
toto.andar(14);
rex.posicao
toto.posicao
rex.andar(14);
rex.posicao