const buttonEncriptar = document.getElementById("buttonEncriptar");
const buttonDesencriptar = document.getElementById("buttonDesencriptar");
const buttonCopy = document.getElementById("buttonCopy");
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
    if (!hasInvalidCharacters&&text.length>0) {
    let characters = text.split("");
    let result = "";
    for (let i = 0; i < characters.length; i++) {
        const element = characters[i];
        result += keys[element] || element;
    }
    outputText.value = result;
    buttonCopy.style.display = "block";
    console.log(result);}
    else {  
        outputText.value = "No se permiten números ni caracteres especiales Y al menos debe tener una letra";
        buttonCopy.style.display = "none";
        alert("No se permiten números ni caracteres especiales Y al menos debe tener una letra");
    }
}

function descifrar() {
    text = inputText.value;
    text = text.toLowerCase();
    hasInvalidCharacters = /[^a-z\s\n]/.test(text);
    if(!hasInvalidCharacters&&text.length>0){
    Object.keys(keys).forEach((key) => {
        text = text.replaceAll(keys[key], key);
    });
    outputText.value = text;
    buttonCopy.style.display = "block";
    console.log(text);}
    else {
        outputText.value = "No se permiten números ni caracteres especiales Y al menos debe tener una letra";
        buttonCopy.style.display = "none";
        alert("No se permiten números ni caracteres especiales");
    }
}

function copy() {
    navigator.clipboard.writeText(outputText.value);
    console.log("Copiado");
}

function init() {
    buttonEncriptar.addEventListener("click", cifrar);
    buttonDesencriptar.addEventListener("click", descifrar);
    buttonCopy.addEventListener("click", copy);
}

init();
