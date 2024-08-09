
document.getElementById("BotonRegistro").addEventListener("click", function() {
let nombre = document.getElementById("nombre").value;
let contraseña = document.getElementById("contraseña").value
let correo = document.getElementById("correo").value
let correcto= false
//lo siguiente hara que el nombre y la contraseña tengan un minimo de caracteres
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
if (correo.includes("@")){
    correcto = true;
} else {
    alert("Por favor ingrese un correo válido");
    return;
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
if(correcto){  
    window.location.href = "Paginascroll1.html";
}
})
