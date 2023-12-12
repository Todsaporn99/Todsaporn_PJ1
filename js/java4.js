function fahrenheitToCelsius() {
    let inputFahrenheit = prompt("Enter temperature in Fahrenheit:");
    let celsiusValue = (parseFloat(inputFahrenheit) - 32) * (5 / 9);
    document.getElementById(
        "show1"
    ).innerText = `Fahrenheit: ${inputFahrenheit}°F, Celsius: ${celsiusValue.toFixed(
  2
)}°C`;
}