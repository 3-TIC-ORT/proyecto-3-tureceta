window.addEventListener('load', function() {
    let nombre = localStorage.getItem("nombre");
    if (nombre) {
        document.getElementById("mostrarNombre").textContent = "Manu es:"  + nombre;
    } else {
        document.getElementById("mostrarNombre").textContent = "No se encontró el nombre.";
    }
});