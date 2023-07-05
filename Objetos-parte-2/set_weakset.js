const _set = new Set();
const _weakset = new WeakSet();

const arr = [1, 2, 3, 2, 4, 5];

_set.add(1);
_set.add(2);
_set.add(3);
_set.add(2);
_set.add(6);
console.log(_set.has(6))
console.log(_set);
console.log(_set.size);
_set.delete(6);
console.log(_set);

for (let el of _set){
    console.log(el);
}

for (let el of _set.keys()){
    console.log(el);
}
