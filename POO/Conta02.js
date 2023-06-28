class ContaBancaria {
    constructor(cliente, numero){

        if (this.constructor === ContaBancaria){
            throw new Error("ContaBancaria is a abstract class.");
        }

        this.cliente = cliente;
        this.numero = numero;
        this.saldo = 0;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        throw new Error("Method sacar must be implemented")
    }
}


class ContaCorrente extends ContaBancaria {
    constructor(cliente, numero){
        super(cliente, numero);
        this.limite = 0;
    }

    sacar(valor){
        let disponivel = this.saldo + this.limite
        if (valor > disponivel) {
            throw new Error("Saldo insuficiente");
        } else {
            this.saldo -= valor;
        }
    }
}

let data = new Date;
data = data.toLocaleDateString("pt-br");

class ContaPoupanca extends ContaBancaria{
    constructor (cliente, numero, aniversario){
        super(cliente, numero);
        this.aniversario = Date.now();
    }

    

    sacar(valor){
        if(valor > this.saldo){
            throw new Error("Saldo insuficiente");
        }
        this.saldo -= valor;
    }
}

const cp1 = new ContaPoupanca("FELIPE", 1000, "17/03/1999");
const cp2 = new ContaPoupanca("MARIA", 1001, "13/08/1979")
const cc1 = new ContaCorrente("JOAO", 1002)


cp1.depositar(1000);
cc1.limite = 1000;
cc1.depositar(2000);
console.log(cc1)
cc1.sacar(2000)
console.log(cc1)