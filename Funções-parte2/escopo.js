function teste1(){
    console.log(this);  //o this muda de acordo com o obj 
} 

const teste2 = () => {
    console.log(this);  //o this será sempre o considerado no momento que a função foi chamada 
}

const obj1 = {
    foo: "bar",
    t: teste1
}

const obj2 = {
    foo: "bar",
    t: teste2
}

// teste1();
obj1.t();

// teste2();
obj2.t();