function printAlphabets() {
    let result = '';
    for (let charCode = 65; charCode <= 90; charCode++) {
        const alphabet = String.fromCharCode(charCode);
        setTimeout(() => {
            result = alphabet;
            document.getElementById('show3').innerText = result;
        }, (charCode - 65) * 1000);
    }
}

printAlphabets();