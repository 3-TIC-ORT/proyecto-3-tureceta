// Esto muestra el nombre del usuario en la página
window.addEventListener('load', function() {
    let nombreUsuario = sessionStorage.getItem("usuarioActivo");

    if (!nombreUsuario) {  // Si no hay un usuario activo en sessionStorage, revisa localStorage
        nombreUsuario = localStorage.getItem("nombre");
    }

    if (nombreUsuario) {
        document.getElementById("mostrarNombre").textContent = "Hola! " + nombreUsuario;
    } else {
        document.getElementById("mostrarNombre").textContent = "No se encontró un usuario activo.";
    }
});
