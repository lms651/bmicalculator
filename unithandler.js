function convertToMetric(heightFt, heightIn, weight) {
    const heightFttoheightIn = Number(heightFt) * 12 // converts feet & inches to in
    const heightTotalIn = heightFttoheightIn + Number(heightIn)
    const heightCm = heightTotalIn * 2.54 // converts in to cm

    const weightKg = weight*.453592 // converts lb to kg

    return [heightCm, weightKg]
}

function isMetric() { // checks if user check off metric units
    if (document.getElementById("metric").checked) {
        return true
    }
    return false
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

export {
    isMetric,
    convertToMetric,
    resetFields,
    showMetric,
    showImperial
}