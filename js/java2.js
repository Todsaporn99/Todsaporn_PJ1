function calculateHypotenuse(base, height) {
    let result = Math.sqrt(base ** 2 + height ** 2);
    document.getElementById("show").innerHTML = result.toFixed(3);
}
