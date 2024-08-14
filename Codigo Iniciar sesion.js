document.getElementById("BotonLogin").addEventListener("click", function(){
    let contraseña = document.getElementById("contraseña").value
    let correo = document.getElementById("correo").value
    if (correo.lenght < 1){
        alert ("el correo debe tener mas de un caracter")
    return
    }

    if (contraseña.lenght < 1){
        alert ("La contraseña debe tener mas de un caracter")
    }
})

    