const NOME = Symbol();
console.log(typeof NOME);

let n = 0;
const user = {
    ["teste" + (++n)]: "teste" + n,
    ["teste" + (++n)]: "teste" + n,
    ["teste" + (++n)]: "teste" + n,
    [NOME]: "com symbol",
    "nome": "com string",
    3: "com numero"
}

console.log(user);