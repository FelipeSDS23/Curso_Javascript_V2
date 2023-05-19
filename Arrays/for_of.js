const arr = [1, 2, 3]
const obj = {
    nome: "Maria",
    idade: 28,
    email: "maria@server.com"
}

for (let prop in obj) {
    console.log(prop)
    console.log(obj[prop])    //for in (obj)
}

for (n of arr){
    console.log(n)            //for of (array)
}