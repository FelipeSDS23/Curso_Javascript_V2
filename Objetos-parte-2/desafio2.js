;(function(){
    let usuariosArr = [];
    // let usuariosExcluidos = [];

    this.pessoa = {

        get usuario(){
            if(usuariosArr.length){
                return usuariosArr[usuariosArr.length - 1];
            }
        },

        set usuario(novoUsuario){
            if (usuariosArr.indexOf(novoUsuario) === -1){
                usuariosArr.push(novoUsuario);
            } else {
                console.log("Usuário já inserido.");
            }
        },

        get usuarios(){
            return usuariosArr;
        }
    }

    pessoa.usuario = "Felipe";
    pessoa.usuario = "Maria";
    pessoa.usuario = "José";

    console.log(pessoa.usuarios);
    console.log(pessoa.usuario);

    pessoa.usuario = "Felipe";
    pessoa.usuario = "Kleber";

    console.log(pessoa.usuarios);
    console.log(pessoa.usuario);

})()