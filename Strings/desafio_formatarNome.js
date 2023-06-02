function formatarNome(nomeCompleto) {
    nomeCompleto.trim()
    if (!nomeCompleto.includes(" ")) {
        return nomeCompleto
    }
    const firstBreakPoint = nomeCompleto.indexOf(" ")
    const lastBreakPoint = nomeCompleto.lastIndexOf(" ")
    const firstName = nomeCompleto.slice(0, firstBreakPoint)
    const middleName = nomeCompleto.slice(firstBreakPoint + 1, lastBreakPoint)
    const lastName = nomeCompleto.slice(lastBreakPoint + 1)
    if (middleName){
        return `${middleName} ${firstName}, ${lastName}`
    } else {
        return `${lastName}, ${firstName}`
    }
}

console.log(formatarNome("Daniel"))

// console.log(formatarNome("Daniel")) // Daniel
// console.log(formatarNome("Daniel Morales")) // Morales, Daniel
// console.log(formatarNome("Daniel Tapias Morales")) // Tapias Morales, Daniel