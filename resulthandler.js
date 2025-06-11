import {isMetric} from "./unithandler.js"
import {convertToMetric} from "./unithandler.js"
import {resetFields} from "./unithandler.js"

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
        height = Number(document.getElementById("height-cm").value)
        weight = Number(document.getElementById("weight-kg").value)
    }

    const bmi = bmiCalculation(height, weight)
    console.log(bmi)
    
    showResult(bmi)
    showModal()
}

function showResult(result) {
    document.getElementById("result-container").style.display = 'block'
    document.getElementById("result-container").innerText = "YOUR RESULT = " + result.toFixed(2) + " YOUR CATEGORY = " + getBMICategory(result)
}


function bmiCalculation(height, weight) { // takes in metric units
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