const dog = {
    name: "rex",
    falar() {
        console.log(this.name, "fala: au au");
    }
    // falar: function () {
    //     console.log(this.name, "fala: au au");
    // }
};

dog.falar()