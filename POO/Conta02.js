class Transferir {
    static execute(contaOrigem, contaDestino, valor){
        if (!contaOrigem instanceof ContaBancaria || !contaDestino instanceof ContaBancaria) {
            throw new Error("Contas precisam herdar de ContaBancaria")
        }
        try {
            contaOrigem.sacar(valor);
            contaDestino.depositar(valor);
        } catch(e){
            console.log("deu ruim", e.message)
        }
    }   
}

class Cliente {
    constructor (nome, documento, tipoDocumento){
        if (this.constructor === Cliente){
            throw new Error("Cliente is a abstract class.");
        }
        this.nome = nome;
        this.documento = documento;
        this.tipoDocumento = tipoDocumento;
    }
}


class PessoaFisica extends Cliente {
    constructor(nome, documento){
        super(nome, documento, "CPF");
    }
}


class PessosJuridica extends Cliente {
    constructor(nome, documento){
        super(nome, documento, "CNPJ");
    }
}


class ContaBancaria {
    constructor(cliente, numero){

        if (this.constructor === ContaBancaria){
            throw new Error("ContaBancaria is a abstract class.");
        }

        this.cliente = cliente;
        this.numero = numero;
        this.saldo = 0;
    }

    get dadosCliente(){
        return `${this.cliente.nome}, ${this.cliente.tipoDocumento}: ${this.cliente.documento}`
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        throw new Error("Method sacar must be implemented");
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


class ContaPoupanca extends ContaBancaria{
    constructor (cliente, numero){
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


const felipe = new PessoaFisica("FELIPE", "12.133.144-10");
const maria = new PessosJuridica("MARIA", "123.132.123/0001-01");


const cp1 = new ContaCorrente(maria, 1000);
const cp2 = new ContaPoupanca(felipe, 1001);
const cc1 = new ContaCorrente(felipe, 1002);


cp1.depositar(1000);
// cc1.limite = 1000;
// cc1.depositar(2000);
// console.log(cc1)
// cc1.sacar(2000)
// console.log(cc1)


// console.log(cp1);
// console.log(cp2);
// console.log(cc1) ;

console.log(cp1);
console.log(cp2);

Transferir.execute(cp1,cp2, 300)
console.log("--------------------")

console.log(cp1);
console.log(cp2);