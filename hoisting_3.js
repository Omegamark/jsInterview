var num = 50;

function logNumber() {
    // Since a new var num is declared within this function scope, the variable num
    // becomes undefined in this function scope.
    console.log(num); // undefined
    var num = 100;
}

logNumber();