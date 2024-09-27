import fs from "fs"
import {onEvent,startServer, } from "soquetic";
// Leer la lista de usuarios del archivo JSON    
let usuarios = fs.readFileSync("usuarios.json","utf-8");
usuarios = JSON.parse(usuarios);
function loginBack(data){
    let ok = false;

    for (let i = 0; i<usuarios.length; i++){
        if (usuarios[i].correo === data.correo && usuarios[i].contraseña === data.contraseña){
            console.log("Bienvenido, " + usuarios[i].nombre);
            ok = true; // Credenciales correctas
            return ok;
        }
        if (!ok) {
            console.log("Correo o contraseña incorrectos");
        }
}

}


onEvent("login",loginBack);
////////////////////////////////////////
function registrarseBack(info){
    let nombre = info.nombre;
    let correo = info.correo;
    let contraseña = info.contraseña;

    let usuarios = fs.readFileSync("usuarios.json","utf-8");
    usuarios = JSON.parse(usuarios);
    if (nombre.length < 1){
        console.log ("El Nombre debe tener mas de un caracter")
        return false 
        
    }
    if (contraseña.length < 1){
        console.log ("La contraseña debe tener mas de un caracter")
        return false
        
    }
    
    if (correo.length < 1){
        console.log ("El correo debe tener mas de un caracter")
        return false
        
    }
    //esto detecta si el correo contiene un dominio valido
    if (
        (correo.includes("@gmail.com") || correo.includes("@hotmail.com") || correo.includes("@est.ort.edu.ar")) &&correo.indexOf("@") > 0 && correo.endsWith(".com")) {
        // Crear objeto para cada usuario con nombre y contraseña
        let usuario = {
            nombre: nombre,
            contraseña: contraseña,
            correo: correo,
        };
        

        usuarios.push(usuario);
        // Guardar la lista de usuarios en usuario.json
        fs.writeFileSync("usuarios.json",JSON.stringify(usuarios));
        return true;
    
    } else {
        // Mostrar un mensaje de error si el correo no es válido
        console.log("Por favor ingrese un correo válido");
        return false;
}}


onEvent("registrarse",registrarseBack);


startServer()