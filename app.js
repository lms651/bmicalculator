import {calculateBMI} from "./resulthandler.js"
import {showImperial} from "./unithandler.js"
import {showMetric} from "./unithandler.js"
import {resetFields} from "./unithandler.js"
import {closeModal} from "./resulthandler.js"


window.addEventListener("DOMContentLoaded", () => {
    const buttonImperial = document.getElementById("imperial")
    buttonImperial.addEventListener('click', showImperial)

    const buttonMetric = document.getElementById("metric")
    buttonMetric.addEventListener('click', showMetric)

    const form = document.getElementById("bmiForm")
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission, only using form for validators
        calculateBMI()
    });

    const resetButton = document.getElementById("reset-button")
    resetButton.addEventListener('click', resetFields)

    const closeModalButton = document.getElementById("close-modal")
    closeModalButton.addEventListener('click', closeModal)

    const collapsibles = document.getElementsByClassName("collapsible");
        for (let i = 0; i < collapsibles.length; i++) {
            collapsibles[i].addEventListener("click", function () {
                this.classList.toggle("active");
                const content = this.nextElementSibling;
                if (content.style.display === "block") {
                content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            })
        }
})