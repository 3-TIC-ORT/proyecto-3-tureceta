
document.getElementById("botonguardar").addEventListener("click", function() {
let nombre = document.getElementById("nombre").value;
let contraseña = document.getElementById("contraseña").value
// Guardar el nombre en localStorage
localStorage.setItem("nombre", nombre);
localStorage.setItem("contraseña", contraseña);
// Limpiar los campos de entrada
document.getElementById("nombre").value = '';
document.getElementById("contraseña").value = '';
console.log (nombre)
window.location.href = "Segundo html benja.html";
});
//porgramacion seguundo html
window.addEventListener('load', function() {
    let nombre = localStorage.getItem("nombre");
    if (nombre) {
        document.getElementById("mostrarNombre").textContent = "Manu es:"  + nombre;
    } else {
        document.getElementById("mostrarNombre").textContent = "No se encontró el nombre.";
    }
});