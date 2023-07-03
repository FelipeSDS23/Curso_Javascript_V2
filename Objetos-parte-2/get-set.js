;(function(){
    let tipo = "";
    const tiposPermitidos = {"mamifero": true, "anfibio": true, "reptil": true};
    
    const cachorro = {
        nome: "Rex",
        get tipo(){
            return tipo;
        },
        set tipo(_tipo){
            if (tiposPermitidos[_tipo]){
                tipo = _tipo;
            } else {
                console.log("nop")
            }
        }
    }

    cachorro.tipo = "mamifero";

    console.log(cachorro.tipo);

})()
