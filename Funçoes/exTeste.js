function calcImc(peso, altura, cb) {
    let imc = peso / (altura * altura);
    if (!cb) {
        return imc;
    }
    else {
        cb(imc)
    }
}

const classificacaoDePeso = function (imc) {
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


calcImc(48, 1.71, classificacaoDePeso)