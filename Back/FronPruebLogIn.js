let contraseña = document.getElementById("contraseña");
let correo = document.getElementById("correo");
document.getElementById("botonLogin").addEventListener("click", logIn)
function logIn(){
    let usuario = {
        constraseña: contraseña.value,
        correo: correo.value,
    }
    console.log(usuario)
}
postData("login",info, registrado);