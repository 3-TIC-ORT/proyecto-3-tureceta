function enviar(){
    let usuario = {
        correo : document.getElementById("correo").value,
        contraseña : document.getElementById("contraseña").value
    }

    postData("login", usuario)
}
