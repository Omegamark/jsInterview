function createButtons() {
    for (var i = 1; i <= 5; i++) {
        var body = document.getElementsByTagName("BODY")[0];
        var button = document.createElement("BUTTON");
        button.innerHTML = "Button " + i;
        // Here an IIFE is used to maintain the i value on each iteration so the alerted number is correct.
        // If i is not encapsulated, then it resets the global value of i, meaning that each button's function call
        // would return a value of 6 for i since 6 is the final value of i after the for loop has completed.
        (function(num) {
            button.onclick = function() {
                alert("This is button " + num);
            }
        })(i);
        body.appendChild(button);
    }
}

createButtons();