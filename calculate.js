window.addEventListener("DOMContentLoaded", () => {
    const buttonEl = document.getElementById("calc-button")
    buttonEl.addEventListener('click', calculateBMI)})

function print() {
    console.log(document.getElementById("height").value)
    console.log(document.getElementById("weight").value)
}

function showResult() {
    const result = document.getElementById("result-container").innerText = "YOUR RESULT = ";
}

function calculateBMI() {
    print()
    showResult()
}