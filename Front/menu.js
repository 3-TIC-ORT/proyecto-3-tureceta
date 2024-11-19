function toggleMenu() {
    const menuContent = document.getElementById("menuContent");
    menuContent.style.display = menuContent.style.display === "block" ? "none" : "block";
}

// Cierra el menú si se hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.menu-button') &&
        !event.target.matches('.icono-usuario') &&
        !event.target.matches('.icono-desplegable') &&
        !event.target.matches('.nombre-texto')) {
        const menuContent = document.getElementById("menuContent");
        if (menuContent && menuContent.style.display === "block") {
            menuContent.style.display = "none";
        }
    }
}