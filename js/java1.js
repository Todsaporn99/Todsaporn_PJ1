function calculateCircleCircumference(radius) {
    return 2 * Math.PI * radius;
}

function calculateAndDisplayCircumference() {
    let inputElement = document.getElementById("input");
    let resultElement = document.getElementById("result");

    let radius = parseFloat(inputElement.value);

    if (!isNaN(radius)) {
        let circumference = calculateCircleCircumference(radius);
        resultElement.textContent = circumference.toFixed(2);
    } else {
        resultElement.textContent = "กรุณากรอกค่าที่ถูกต้อง";
    }
}

