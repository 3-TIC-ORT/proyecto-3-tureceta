
document.getElementById("BotonRegistro").addEventListener("click", function() {
let nombre = document.getElementById("nombre").value;
let contraseña = document.getElementById("contraseña").value
let correo = document.getElementById("correo").value
//lo siguiente hara que el nombre, la contraseña y el correo tengan un minimo de caracteres
if (nombre.length < 1){
    alert ("El Nombre debe tener mas de un caracter")
    return
    
}
if (contraseña.length < 1){
    alert ("La contraseña debe tener mas de un caracter")
    return
    
}

if (correo.length < 1){
    alert ("El correo debe tener mas de un caracter")
    return
    
}
//esto detecta si el correo contiene un dominio valido
if (
    (correo.includes("@gmail.com") || correo.includes("@hotmail.com") || correo.includes("@est.ort.edu.ar")) &&correo.indexOf("@") > 0 && correo.endsWith(".com")) {
    // Crear objeto para cada usuario con nombre y contraseña
    let usuario = {
        nombre: nombre,
        contraseña: contraseña,
    };

    // Guardar el objeto del usuario en localStorage con el correo como clave
    localStorage.setItem(correo, JSON.stringify(usuario));

    // Redirigir a la siguiente página
    window.location.href = "Paginascroll1.html";
} else {
    // Mostrar un mensaje de error si el correo no es válido
    alert("Por favor ingrese un correo válido");
}
});
