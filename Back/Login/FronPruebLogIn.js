let botonLogin = document.getElementById("botonLogin")
 function enviar(){
    let correo = document.getElementById("correo").value
    let contraseña = document.getElementById("contraseña").value
    // Crear el objeto usuario con los datos ingresados
    let usuario = {
        correo: correo,
        contraseña: contraseña,
    };

    // Llamar a la función postData y manejar la respuesta del backend
    postData("login", usuario, function(ok) {
        if (ok === true) {
            // Redirigir si el login es exitoso
            window.location.href = "http://127.0.0.1:5500/Front/Paginascroll1.html";
        } else 
            console.log("Login fallido");
        }
    );
}
botonLogin.addEventListener("click", enviar)

