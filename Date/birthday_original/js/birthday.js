function quantoFaltaPara(m, d) {

    const dataAtual = new Date()
    dataAtual.setHours(0)
    dataAtual.setMinutes(0)
    dataAtual.setSeconds(0)
    dataAtual.setMilliseconds(0)

    function dataAniversario(a) {
        const dia = d
        const mes = m - 1
        const ano = a
        return new Date(ano, mes, dia)
    }

    let aniversario = dataAniversario(dataAtual.getFullYear())

    const dataAtualMilliseconds = dataAtual.getTime()
    const aniversarioMilliseconds = aniversario.getTime()

    if (aniversarioMilliseconds < dataAtualMilliseconds) {
        const proxAniversario = new Date(dataAtual.getTime() + 31536000000)
        aniversario = dataAniversario(proxAniversario.getFullYear())
    }

    let diasFaltando = new Date(aniversario.getTime() - dataAtual.getTime())
    diasFaltando = diasFaltando.getTime() / 1000 / 60 / 60 / 24
    return diasFaltando.toFixed(0)
}

