class ContaBancaria {
    constructor(cliente, numero){

        if (this.constructor = ContaBancaria){
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
        throw new Error('Method "sacar" must be implemented.');
    }
}



