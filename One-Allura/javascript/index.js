const btnEncriptar = document.querySelector(".btnEncriptar");
const btnDesencriptar = document.querySelector(".btnDesencriptar");
const btnCopiar = document.querySelector(".btnCopiar"); // Botón para copiar
const muñeco = document.querySelector(".imgMuñeco");
const h3 = document.querySelector(".h3Contenedor");
const parrafo = document.querySelector(".contenedorP");
const resultadoTexto = document.querySelector(".resultText");

const mapeoEncriptar = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};

const mapeoDesencriptar = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
};

// Añadimos los event listeners a los botones
btnEncriptar.addEventListener("click", () => procesarTexto(encriptar));
btnDesencriptar.addEventListener("click", () => procesarTexto(desencriptar));
btnCopiar.addEventListener("click", copiarAlPortapapeles); // Añadimos el evento para el botón copiar

function procesarTexto(procesarFn) {
    displayNone();
    const areaText = recuperarText();
    resultadoTexto.textContent = procesarFn(areaText);
}

function recuperarText() {
    return document.querySelector(".area").value;
}

function displayNone() {
    muñeco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptar(mensaje) {
    /**Remplaza de forma global  */
    return mensaje.replace(/[aeiou]/g, match => mapeoEncriptar[match]);
}

function desencriptar(mensaje) {
    return mensaje.replace(/ai|enter|imes|ober|ufat/g, match => mapeoDesencriptar[match]);
}

function copiarAlPortapapeles() {
    const texto = resultadoTexto.textContent;
    
    // Usamos la API Clipboard para copiar al portapapeles
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error("Error al copiar al portapapeles: ", err);
    });
}
