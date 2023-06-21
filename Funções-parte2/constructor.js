function CriarCachorro(nome) {
        let posicao = 0;    

        this.nome = nome;
        this.latir = function(){
            console.log(`${this.nome} está latindo.`);
        };
        this.andar = function(m){
            console.log(`${this.nome} está andando ${m} metros.`);
            posicao += m;
        };
        this.posicao = function(){
            console.log(posicao)
        };
    }

const rex = new CriarCachorro("rex");
const toto = new CriarCachorro("toto");

rex.latir();
toto.latir();
toto.andar(55);
toto.posicao();
rex.posicao();