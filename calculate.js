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
})

function showResult(result) {
    document.getElementById("result-container").style.display = 'block'
    document.getElementById("result-container").innerText = "YOUR RESULT = " + result.toFixed(2) + " YOUR CATEGORY = " + getBMICategory(result)
}

function calculateBMI() {
    console.log("HEY")
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
}

function isMetric() { // checks if user check off metric units
    if (document.getElementById("metric").checked) {
        return true
    }
    return false
}

function convertToMetric(heightFt, heightIn, weight) {
    const heightFttoheightIn = Number(heightFt) * 12// converts feet & inches to in
    const heightTotalIn = heightFttoheightIn + Number(heightIn)
    const heightCm = heightTotalIn * 2.54 // converts in to cm

    const weightKg = weight*.453592 // converts lb to kg

    return [heightCm, weightKg]
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

function showImperial() { // replaces metric input fields with imperial
    resetFields()
    document.getElementById("metric-units").style.display='none'
    document.getElementById("imperial-units").style.display='block'
    document.getElementById("weight-lb").required=true
    document.getElementById("height-ft").required=true
    document.getElementById("height-in").required=true
    document.getElementById("weight-kg").required=false
    document.getElementById("height-cm").required=false
}

function showMetric() {
    resetFields()
    document.getElementById("metric-units").style.display='block'
    document.getElementById("imperial-units").style.display='none'
    document.getElementById("weight-kg").required=true
    document.getElementById("height-cm").required=true
    document.getElementById("weight-lb").required=false
    document.getElementById("height-ft").required=false
    document.getElementById("height-in").required=false
}

function resetFields() {
    document.getElementById("height-cm").value = ''
    document.getElementById("height-ft").value = ''
    document.getElementById("height-in").value = ''
    document.getElementById("weight-lb").value = ''
    document.getElementById("weight-kg").value = ''
    document.getElementById("result-container").style.display='none'
}
