function teste (str, n) {
        console.log(this.name);
        console.log(str, n);
}

teste("str", 10);

//Formas de executar uma função alterando o this no momento da execução
teste.call({name: "Maria"}, "string", 20);
teste.apply({name: "Felipe"}, ["Felipe", 24]);
teste.call({name: "João"}, ...["João", 28]);


const teste2 = teste.bind({name: "Joana"});
teste2("s", 40);
