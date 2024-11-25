let nombre = document.getElementById("nombre");
let contraseña = document.getElementById("contraseña");
let correo = document.getElementById("correo");



function registrado(registroExistoso){
    alert("Registrado Exitosamente") 
    
}


function registrarseFront(){
    let info = {}
    info.nombre = nombre.value;
    info.contraseña = contraseña.value;
    info.correo = correo.value;
    if (info.nombre.length < 1){
        console.log ("El Nombre debe tener mas de un caracter")
        return false 
        
    }
    if (info.contraseña.length < 1){
        console.log ("La contraseña debe tener mas de un caracter")
        return false
        
    }
    
    if (info.correo.length < 1){
        console.log ("El correo debe tener mas de un caracter")
        return false
    }
    //esto detecta si el correo contiene un dominio valido
    if (
        (info.correo.includes("@gmail.com") || info.correo.includes("@hotmail.com") || info.correo.includes("@est.ort.edu.ar")) &&info.correo.indexOf("@") > 0 && info.correo.endsWith(".com")) {
        window.location.href = "http://127.0.0.1:5500/Front/Paginascroll1.html";
        localStorage.setItem("user",JSON.stringify(info.nombre))
        localStorage.setItem("info",JSON.stringify(null));
        } else {
            // Mostrar mensaje de error si el correo no es válido
            errorCorreo.textContent = "Por favor ingrese un correo válido.";
            errorCorreo.style.display = "block";
            return false;
        }
    
    postData("registrarse",info, (data) => {
        if (data.ok) {
            registrado("cahu");
        }
    } );
}



document.getElementById("BotonRegistro").addEventListener("click",registrarseFront);
