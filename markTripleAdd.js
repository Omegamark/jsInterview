function tripleAdd(num) {
    return function(num2) {
        return function(num3) {
            return num + num2 + num3
        }
    }
}

console.log(tripleAdd(10)(20)(30))

// Example of the same function without curried functions
function tripleAdd1(num1, num2, num3) {
    return num1 + num2 + num3;
}

// How to curry tripleAdd1 
function curryTripleAdd1(num1,num2,num3) {
    return tripleAdd1(num1,num2,num3)
}

// console.log(tripleAdd1(15, 20, 20))

console.log(curryTripleAdd1(15,20,20))