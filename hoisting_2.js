// How the javascript interpreter deals with variables.
// color is "hoisted" to the top of the scope in which it was declared.
var color;
console.log(color); // "undefined"

// The variable will be given a value as the code runs.
color = "blue";
console.log(color); // "blue"