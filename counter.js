var currentNumber = 0;

function increment(){
    currentNumber++;
    console.log("inc");
}

function decrement(){
    currentNumber--;
    console.log("dec");
}

function get(){
    return currentNumber;
}


module.exports.increment = increment;
module.exports.decrement = decrement;
module.exports.get = get;

console.log("counter created");