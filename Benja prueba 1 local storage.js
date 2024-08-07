
document.getElementById("BotonRegistro").addEventListener("click", function() {
let nombre = document.getElementById("nombre").value;
let contraseña = document.getElementById("contraseña").value
let correo = document.getElementById("correo").value
// Crear objeto para cada usuario con usuario y contraseña
let usuario = {
nombre: nombre,
contraseña: contraseña,
};

// Guardar el objeto del usuario en localStorage con el correo como clave
localStorage.setItem(correo, JSON.stringify(usuario));

// Limpiar los campos de entrada
document.getElementById("nombre").value = '';
document.getElementById("contraseña").value = '';
window.location.href = "";
});

