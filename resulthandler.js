import {isMetric} from "./unithandler.js"
import {convertToMetric} from "./unithandler.js"
import {resetFields} from "./unithandler.js"

// main function
function calculateBMI() {
    let height = 0 
    let weight = 0 
    if (!isMetric()) {
        const userHeightFt = document.getElementById("height-ft").value
        const userHeightIn = document.getElementById("height-in").value
        const userWeightLb = document.getElementById("weight-lb").value
        let [convertedHeight, convertedWeight] = convertToMetric(userHeightFt, userHeightIn, userWeightLb)
        height = convertedHeight
        weight = convertedWeight
    } else {
        console.log(document.getElementById("height-cm").value)
        height = Number(document.getElementById("height-cm").value)
        console.log(height)
        weight = Number(document.getElementById("weight-kg").value)
        console.log(weight)
    }

    const bmi = bmiCalculationMetric(height, weight)
    
    showResult(bmi)
    showModal()
}

function showResult(result) {
    document.getElementById("result-container").style.display = 'block'
    document.getElementById("result-container").innerHTML =
    "<div style='font-size: 1.5em;'><strong><u>RESULT</u></strong><br><br>" +
    "<strong>YOUR BMI: " + result.toFixed(2) + "</strong><br><br>" +
    "<strong>BMI CATEGORY: " + getBMICategory(result) + "</strong>"
}


function bmiCalculationMetric(height, weight) { // takes in metric units
    const bmi = weight/((height*.01)*(height*.01))
    return bmi
}

function getBMICategory(bmi) {
    let result = "";
    switch (true) {
        case bmi < 18.5: result = "Underweight"; break;
        case bmi < 25: result = "Healthy Weight"; break;
        case bmi < 30: result = "Overweight"; break;
        case bmi < 35: result = "Class 1 Obese"; break;
        case bmi < 40: result = "Class 2 Obese"; break;
        case bmi >= 40: result = "Class 3 Obese (Severe Obesity)"; break;
        default: result = "Bad input value"; break;
    }
    return result
}


function showModal() {
    document.getElementById("result-modal").style.display='block'
}

function closeModal() {
    document.getElementById("result-modal").style.display='none'
    resetFields()
    }

export {
    calculateBMI,
    closeModal
}