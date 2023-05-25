const buttonEncriptar = document.getElementById("buttonEncriptar");
const buttonDesencriptar = document.getElementById("buttonDesencriptar");
const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");

const keys = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
};

function cifrar() {
    text = inputText.value;
    text = text.toLowerCase();
    hasInvalidCharacters = /[^a-z\s\n]/.test(text);
    if (!hasInvalidCharacters) {
    let characters = text.split("");
    let result = "";
    for (let i = 0; i < characters.length; i++) {
        const element = characters[i];
        result += keys[element] || element;
    }
    outputText.value = result;
    console.log(result);}
    else {  
        alert("No se permiten números ni caracteres especiales");
    }
}

function descifrar() {
    text = inputText.value;
    text = text.toLowerCase();
    hasInvalidCharacters = /[^a-z\s\n]/.test(text);
    if(!hasInvalidCharacters){
    Object.keys(keys).forEach((key) => {
        text = text.replaceAll(keys[key], key);
    });
    outputText.value = text;
    console.log(text);}
    else {
        alert("No se permiten números ni caracteres especiales");
    }
}

function init() {
    buttonEncriptar.addEventListener("click", cifrar);
    buttonDesencriptar.addEventListener("click", descifrar);
}

init();
