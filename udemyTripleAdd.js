// Example of function using curried functions
function tripleAdd(num1) {
    return function(num2) {
        return function(num3) {
            return num1 + num2 + num3;
        }
    }
}

// Example of the same function without curried functions
function tripleAdd1(num1, num2, num3) {
    return num1 + num2 + num3;
}

tripleAdd(10)(20)(30);
tripleAdd1(10, 20, 30);

