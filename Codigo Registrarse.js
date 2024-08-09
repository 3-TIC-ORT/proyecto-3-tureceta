
document.getElementById("BotonRegistro").addEventListener("click", function() {
let nombre = document.getElementById("nombre").value;
let contraseña = document.getElementById("contraseña").value
let correo = document.getElementById("correo").value
//lo siguiente hara que el nombre y la contraseña tengan un minimo de caracteres
if (nombre.length < 1){
    alert ("El Nombre debe tener mas de un caracter")
    return
    
}
if (contraseña.length < 1){
    alert ("La contraseña debe tener mas de un caracter")
    return
    
}

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
window.location.href = "Paginascroll1.html";
});


