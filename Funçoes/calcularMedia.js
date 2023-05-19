(function () {
function calcMedia () {
    let total = 0;
    for (let i = 0; i < arguments.length; i++){
        if (typeof(arguments[i]) !== "number"){
            return "Error";
        }
        total += arguments[i];
    }
    if (arguments.length === 0) {
        return 0;
    }
    return total / arguments.length;
}
console.log(calcMedia(2, 2, 3));
})()