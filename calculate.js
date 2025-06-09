window.addEventListener("DOMContentLoaded", () => {
    const buttonImperial = document.getElementById("imperial")
    buttonImperial.addEventListener('click', showImperial)

    const buttonEl = document.getElementById("calc-button")
    buttonEl.addEventListener('click', calculateBMI)})

function showResult(result) {
    const bmiResult = document.getElementById("result-container").innerText = "YOUR RESULT = " + result.toFixed(2) + " YOUR CATEGORY = " + getBMICategory(result)
}

function calculateBMI() {
    if (isMetric()) {
        let userHeight = document.getElementById("height-cm").value
        let userWeight = document.getElementById("weight-kg").value
        const bmi = bmiCalculation(userHeight, userWeight)
        showResult(bmi)
    } else {
        let userHeightFt = document.getElementById("height-ft").value
        let userHeightIn = document.getElementById("height-in").value
        let userWeightLb = document.getElementById("weight-lb").value
        const [value1, value2] = convertToMetric(userHeightFt, userHeightIn, userWeightLb)
        const bmi = bmiCalculation(value1, value2)
        console.log(getBMICategory(bmi))
        showResult(bmi)
    }
}




//     const [value1, value2] = convertToMetric(userHeight, userWeight)
//     console.log(value1, value2)
//     const bmi = bmiCalculation(value1, value2)
//     console.log(bmi)
//     console.log(getBMICategory(bmi))
//     showResult(bmi)
// }

function isMetric() {
    if (document.getElementById("metric").checked) {
        return true
    }
    return false
}

function convertToMetric(heightFt, heightIn, weight) {
    console.log(heightFt)
    console.log(heightIn)
    console.log(weight)

    const heightFttoheightIn = Number(heightFt) * 12// converts feet & inches to in
    console.log(heightFttoheightIn)
    const heightTotalIn = heightFttoheightIn + Number(heightIn)
    console.log(heightTotalIn)
    const heightCm = heightTotalIn * 2.54 // converts in to cm

    console.log(heightCm)
    const weightKg = weight*.453592 // converts lb to kg
    console.log(weightKg)
    return [heightCm, weightKg]
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

function showImperial() { // replaces metric input fields with imperial
    document.getElementById("metric-units").style.display='none'
    document.getElementById("imperial-units").style.display='block'
}

