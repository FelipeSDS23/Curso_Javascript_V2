;(function(){
    let _quantidade = 0;
    let _contador = 0;

    this.produto = {

        get quantidade(){
            console.log(`Consultas: ${++_contador}`);
            return _quantidade;
        },
    
        set quantidade(valor){
            if (valor > 0){
                _quantidade = valor;
            } else {
                console.log("Quantidade precisa ser maior que 0");
            }
        }

    }

    produto.quantidade = 20;
    console.log(produto.quantidade);

    produto.quantidade = 20;
    console.log(produto.quantidade);

    produto.quantidade = 20;
    console.log(produto.quantidade);

})()