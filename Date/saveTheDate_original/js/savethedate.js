; (function () {
    const heroContent = document.querySelector(".hero-content")

    const dataAtual = new Date()
    const dataAlvo = new Date(2023, 07, 21, 18, 00)

    const dif = new Date(dataAlvo.getTime() - dataAtual.getTime())

    const p = document.createElement("p")
    p.innerText = `Contagem Regressiva: ${dif.getMonth()} months, ${dif.getDate()} days, ${dif.getHours()} hours, ${dif.getMinutes()} minutes, ${dif.getSeconds()} seconds`
    heroContent.appendChild(p)

    console.log(dataAtual.getTime())
    console.log(dataAlvo.getTime())
    console.log(dif)
})()