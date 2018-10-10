function createButtons() {
    for (let i = 1; i <= 5; i++) {
        const body = document.getElementsByTagName("body")[0];
        const button = document.createElement("button");
        button.innerHTML = "Button " + i;
        button.onclick = function() {
            alert("This is button " + i);
        }
        body.appendChild(button);
    }
}

createButtons();