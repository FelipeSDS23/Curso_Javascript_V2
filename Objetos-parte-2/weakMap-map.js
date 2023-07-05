const myMap = new Map();
const myObj = new Object();

myObj.prop1 = "prop 1";

const arr = [];

myMap.set(arr, "meu array");
console.log(myMap.get(arr));

//---------------//-----------------//-------------------//-------------------//

const myMap2 = new Map([[0, "zero"], [1, "um"], [2, "dois"]]);

console.log(myMap2.get(0));
console.log(myMap2.get(2));

console.log(myMap2.has(2));

console.log(myMap2.keys());
console.log(myMap2.values());
console.log(myMap2.entries());