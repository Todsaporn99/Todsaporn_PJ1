function dayToSeconds() {
    let inputDays = document.getElementById("daysInput").value;
    if (!isNaN(inputDays)) {
        let seconds = inputDays * 86400;
        document.getElementById(
            "show2"
        ).innerText = `จำนวนวัน ${inputDays} วัน: ${seconds} นาที`;
    } else {
        alert("Please enter a valid number of days.");
    }
}