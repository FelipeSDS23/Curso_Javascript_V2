import { myMod2 } from "./mod2.js"

function myMod1(){
    console.log("myMod 1 executado")
    return "valor retornado de myMod1 |"
}

export function myMod1_nomeada(){
    return "| funcao exportada nomeada"
}

export const PI = "PI: " + Math.PI

export const obj = {
    foo: true,
    bar: "Olá mundo"
}


const nome = "daniel"
const idade = 40

export {nome, idade}

console.log(new myMod2())

export default myMod1