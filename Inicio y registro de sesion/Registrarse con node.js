import fs from "fs";
import {onEvent,startServer} from "soquetic"

function registrarse(nombre, correo, contraseña){
    let usuarios = fs.readFileSync("usuarios.json","utf-8");
    usuarios = JSON.parse(usuarios);
    if (nombre.length < 1){
        console.log ("El Nombre debe tener mas de un caracter")
        return
        
    }
    if (contraseña.length < 1){
        console.log ("La contraseña debe tener mas de un caracter")
        return
        
    }
    
    if (correo.length < 1){
        console.log ("El correo debe tener mas de un caracter")
        return
        
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
    
    } else {
        // Mostrar un mensaje de error si el correo no es válido
        console.log("Por favor ingrese un correo válido");
    }}


onEvent("registrarse",registrarse);
startServer();