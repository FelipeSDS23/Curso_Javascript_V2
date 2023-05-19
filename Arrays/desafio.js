function sum(cb){
    const parametros = Array.from(arguments)
    const [cbF] = parametros 
    const [ ,...nums] = parametros
    const soma = nums.reduce((ac, num) => {
        ac += num
        return ac
    }) 
    if(typeof(cbF) === "function"){
        return cbF(soma, nums)
    } else {
        throw Error("O primeiro parâmetro precisa ser uma função")
    }
}

function average(soma, nums) {
    let aver = soma / nums.length
    return `Soma: ${soma} | Media: ${aver}`
}



console.log(sum(average, 2, 2, 4))