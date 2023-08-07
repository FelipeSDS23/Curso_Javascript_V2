const fs = require("fs")

const flags = process.argv

addJson(flags)

function addJson(flags){
    const firstName = flags.indexOf("--firstname")
    const lastname = flags.indexOf("--lastname")

    if (firstName === -1 && lastname === -1){
        console.log("nenhuma flag passada")
        return
    }

    const newData = {
        name: flags[firstName + 1],
        lastname: flags[lastname + 1]
    }

    const dados = require("./dados/dados.json")
    dados.push(newData)

    fs.writeFile("./dados/dados.json", JSON.stringify(dados), err => {
        if (err){
            throw err
        }
        console.log("arquivo Json atualizado")
    })
    
}

