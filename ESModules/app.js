import myMod1, {myMod1_nomeada, PI, obj, nome, idade} from "./modules/mod1.js"

const myMod = myMod1()

console.log("app rodando", myMod, myMod1_nomeada(), PI)
console.log(obj.foo, obj.bar, nome, idade)