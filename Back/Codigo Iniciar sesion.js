document.getElementById("BotonLogin").addEventListener("click", function() {
    let contraseña = document.getElementById("contraseña").value;
    let correo = document.getElementById("correo").value;

    // Validar que el correo y la contraseña tengan al menos un carácter
    if (correo.length < 1) {
        alert("El correo debe tener más de un carácter");
        return;
    }

    if (contraseña.length < 1) {
        alert("La contraseña debe tener más de un carácter");
        return;
    }

    // Obtener el objeto del usuario desde localStorage usando el correo como clave
    let CorreoGuardado = localStorage.getItem(correo);

    if (!CorreoGuardado) {
        alert("No se encontró una cuenta con ese correo.");
        return; 
    }

    // Convertir el string almacenado en un objeto
    let usuario = JSON.parse(CorreoGuardado);

    // Verificar si la contraseña es correcta
    if (usuario.contraseña !== contraseña) {
        alert("La contraseña es incorrecta.");
        return; // Detiene el proceso si la contraseña es incorrecta
    }

    // Si la contraseña es correcta, redirigir al usuario a la página principal
    sessionStorage.setItem("usuarioActivo", usuario.nombre); // Guardar nombre del usuario en sessionStorage
    window.location.href = "Paginascroll1.html";
});
