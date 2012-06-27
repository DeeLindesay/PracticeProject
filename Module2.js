function SayHello(){
    console.log("Hello from Module 2");
} 

module.exports = SayHello      //exports is a special object that is the output of the module.  this expression assigns SayHello to the module output



var counter = require("./counter");  //loading counter module


for (var i=0; i<6; i++){
    counter.increment();
}

for (var i=0; i<1; i++){
    counter.decrement();
}



console.log("Module2" + counter.get());
