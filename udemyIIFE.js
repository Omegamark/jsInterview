(function doubleNumber(num) {
    return num * 2;
})(10);

// IIFEs can be used to encapsulate and limit the scope of JS variables, etc.
// Code can be run inside the IIFE which will not effect global scope.
(function() {
    
    function getTotal(a, b) {
        return a + b;
    }

    // This example mentioned how redefining '$' within the IIFE will not overwrite
    // jQuery's $ in global scope.
    var $ = "currency";

    if(true) console.log("hello world");
})();