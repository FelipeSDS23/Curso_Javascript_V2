const obj1 = {
    nome: "daniel"
};

const obj2 = {
    nome: "maria"
};

Object.freeze(obj1);
console.log(Object.isFrozen(obj1));
console.log(Object.isFrozen(obj2));