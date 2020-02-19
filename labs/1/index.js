let Adder = require ("./Adder.js");
let myAdder = new Adder(
    {
        a:7,
        b:3
    }
)

console.log(myAdder.render());