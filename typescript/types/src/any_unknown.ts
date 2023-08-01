function add(x: unknown, y: unknown){
    if (typeof x === "number" && typeof y === "number")
    return x + y
}

console.log(add(3, 5))