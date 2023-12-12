const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    num = +num;
    let fibonacci = [1,1];
    while (!fibonacci[num-1]) {
        fibonacci[fibonacci.length] 
            = fibonacci[fibonacci.length - 1]
            + fibonacci[fibonacci.length - 2];
    }
    return fibonacci[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
