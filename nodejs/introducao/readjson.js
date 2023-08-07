const { Console } = require("console")
const fs = require("fs")

fs.readFile("./dados/dados.json", "utf-8", (err, content) => {
    console.log(JSON.parse(content)[0].name)
})

console.log("-----------------")

const dado = require("./dados/dados.json")
console.log(dado[0].lastname)