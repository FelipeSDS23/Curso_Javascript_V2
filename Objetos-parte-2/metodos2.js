const obj = {
    prop1: "prop 1",
    prop2: "prop 2",
}

const objFreeze = {...obj}
const objSeal = {...obj}
const objPrevent = {...obj}

Object.freeze(objFreeze);
Object.seal(objSeal);
Object.preventExtensions(objPrevent);