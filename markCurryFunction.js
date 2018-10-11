function getProduct(num1, num2) {
    return num1 * num2;
}

function curryGetProduct(num1, num2) {
    return getProduct(num1, num2)
}

function curryGetProduct2(num1) {
    return function(num2) {
        return num1 * num2
    }
}

console.log(curryGetProduct(10, 20))
console.log(curryGetProduct2(15)(10))