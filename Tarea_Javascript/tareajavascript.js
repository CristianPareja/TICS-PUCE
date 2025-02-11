function cambio() {
    alert('Su mensaje ha sido almacenado')

}
function mouse_encima() {
    alert("MIAUUU!!!")
}

function teclaPulsada() {
    alert('Has presionado una tecla');
}
let cuenta = 0;
function contadorClics() {
    cuenta++;
    document.getElementById("contador").textContent = `Clics: ${cuenta}`;
}
function agrandarBoton(boton) {
    boton.style.transform = "scale(1.1)";
    boton.style.backgroundColor = "#4CAF50";
    boton.style.color = "white";
}