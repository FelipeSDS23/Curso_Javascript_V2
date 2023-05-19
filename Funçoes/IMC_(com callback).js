(function () {
    function calcIMC(peso, altura, callback) {
        if (arguments.length === 0) {
            throw Error("You must digit your weight and height");
        }
        if (typeof peso !== "number" || typeof altura !== "number") {
            throw Error("Must be a number.");
        }
        let imc = peso / altura ** 2;

        if (callback){
            return callback(imc);
        }

        return imc = console.log(imc.toFixed(1));
        }

    function classificacao(imc) {
        if (imc <= 16.9) {
            console.log("Muito abaixo do peso");
        }
        else if (imc <= 18.4) {
            console.log("Abaixo do peso");
        }
        else if (imc <= 24.9) {
            console.log("Peso normal");
        }
        else if (imc <= 29.9) {
            console.log("Acima do peso");
        }
        else if (imc <= 34.9) {
            console.log("Obesidade Grau 1");
        }
        else if (imc <= 40) {
            console.log("Obesidade Grau 2");
        }
        else {
            console.log("Obesidade Grau 3");
        }
    }

    calcIMC(48, 1.71);
    calcIMC(48, 1.71, classificacao);
})()