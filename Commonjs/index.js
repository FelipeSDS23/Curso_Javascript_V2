const fs = require("fs") //modulo nativo
const emoji = require("node-emoji") //modulo instalado

const mod1 = require("./modules/mod1")

const mod2 = require("./modules/mod2")
const mod3 = require("./modules/mod3")

console.log(mod2)
console.log(mod3)

// fs.writeFile("teste.txt", "ola mundo", err => {
//     if (err) throw err
//     console.log("Saved!", emoji.get("coffee"))
// })

