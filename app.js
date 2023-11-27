const passwordBox = document.getElementById("password")
const length = 12

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "@#$%^&*()_+~|}{[]<>/-="

const allChars = upperCase + lowerCase + number + symbol

function createPassword(){
    let password = "";

    const passwordLengthSlider = document.getElementById("length");
    const passwordLength = parseInt(passwordLengthSlider.value);

    if (document.getElementById("uppercase").checked) {
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
    }
    if (document.getElementById("lowercase").checked) {
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    }
    if (document.getElementById("numbers").checked) {
        password += number[Math.floor(Math.random() * number.length)];
    }
    if (document.getElementById("symbols").checked) {
        password += symbol[Math.floor(Math.random() * symbol.length)];
    }

    const selectedChars = (document.getElementById("uppercase").checked ? upperCase : "") + (document.getElementById("lowercase").checked ? lowerCase : "") +(document.getElementById("numbers").checked ? number : "") + (document.getElementById("symbols").checked ? symbol : "");

    while (password.length < passwordLength) {
        password += selectedChars[Math.floor(Math.random() * selectedChars.length)];
    }

    passwordBox.value = password;
}

function copyPassword() {
    const password = passwordBox.value;
    
    if (password) {
        passwordBox.select();
        document.execCommand("copy");
        alert("Password copied to clipboard!");
    }
}

const copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", copyPassword);


const passwordLengthSlider = document.getElementById("length");
const lengthValueDisplay = document.getElementById("lengthValue");

passwordLengthSlider.addEventListener("input", function () {
    lengthValueDisplay.textContent = passwordLengthSlider.value;
});

const generateButton = document.querySelector("button");
generateButton.addEventListener("click", createPassword);
