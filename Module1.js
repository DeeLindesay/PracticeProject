var mod2 = require("./Module2");       //loading module 2 

console.log("Hello from Module 1");

mod2();                                 //executes the function that module 2 has outputted




var counter = require("./counter");  //loading counter module


for (var i=0; i<4; i++){
    counter.increment();
}

for (var i=0; i<2; i++){
    counter.decrement();
}



console.log(counter.get());

