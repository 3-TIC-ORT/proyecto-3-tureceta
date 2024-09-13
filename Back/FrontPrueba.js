let nombre = document.getElementById("nombre");
let contraseña = document.getElementById("contraseña");
let correo = document.getElementById("correo");



function registrado(){
    alert("Registrado Exitosamente");
}


function registrarseFront(){
    let info = {}
    info.nombre = nombre.value;
    info.contraseña = contraseña.value;
    info.correo = correo.value;
    postData("registrarse",info, registrado);
}



document.getElementById("BotonRegistro").addEventListener("click",registrarseFront);
