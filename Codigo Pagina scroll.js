//Esto muestra el nombre del usuario en la pagina
window.addEventListener('load', function() {
    let nombre = localStorage.getItem("nombre");
    if (nombre) {
        document.getElementById("mostrarNombre").textContent = "Hola!"  + nombre;
    } else {
        document.getElementById("mostrarNombre").textContent = "No se encontró el nombre.";
    }
});
window.addEventListener('load', function() {
    let nombreUsuario = sessionStorage.getItem("usuarioActivo");
    if (nombreUsuario) {
        document.getElementById("mostrarNombre").textContent = "Hola " + nombreUsuario;
    } else {
        document.getElementById("mostrarNombre").textContent = "No se encontró un usuario activo.";
    }
});