const calcRevealPattern = (function(){
    let n = 0;

    function somar(num){
        n += num;
        return this;
    }

    function subtrair(num){
        n -= num;
        return this;
    }

    function log(){
        console.log(n);
        return this;
    }

    return {
        somar,
        subtrair,
        log
    }
})()

calcRevealPattern.somar(5).log().subtrair(2).log()