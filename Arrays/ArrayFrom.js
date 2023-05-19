 function somar() {
    const lista = Array.from(arguments)
    const soma = lista.reduce((ac, num) => {
        ac += num
        return ac
    }, 0)
    return soma
 }


 console.log(somar(1, 2, 2, 5, 10, 20))