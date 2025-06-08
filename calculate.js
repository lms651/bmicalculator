window.addEventListener("DOMContentLoaded", () => {
    const buttonEl = document.getElementById("calc-button")
    buttonEl.addEventListener('click', calculateBMI)})

function showResult(result) {
    const bmiResult = document.getElementById("result-container").innerText = "YOUR RESULT = " + result.toFixed(2) + "YOUR CATEGORY = " + getBMICategory(result)
}

function calculateBMI() {
    let userHeight = document.getElementById("height").value
    let userWeight = document.getElementById("weight").value
    const [value1, value2] = convertToMetric(userHeight, userWeight)
    console.log(value1, value2)
    const bmi = bmiCalculation(value1, value2)
    console.log(bmi)
    console.log(getBMICategory(bmi))
    showResult(bmi)
}

function isMetric() {
    if (document.getElementById("metric").checked) {
        return true
    }
    return false
}

function convertToMetric(height, weight) {
    if (isMetric()) {
        return [height, weight]
    }
    return [height*2.54, weight*.453592] // converts to cm and kg
}

function bmiCalculation(height, weight) {
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

