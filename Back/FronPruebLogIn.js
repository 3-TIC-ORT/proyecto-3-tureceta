let botonLogin = document.getElementById("botonLogin")

function enviar(){
let correo = document.getElementById("correo").value
let contraseña = document.getElementById("contraseña").value
// Crear el objeto usuario con los datos ingresados
let usuario = {
    correo: correo,
    contraseña: contraseña,
};
 postData("login",usuario,function(ok){

    if(ok===true){
    window.location.href = "http://127.0.0.1:5500/Front/Paginascroll1.html";
} else {
    alert("Correo o contraseña incorrectos");
}
});
}

botonLogin.addEventListener("click", enviar)

