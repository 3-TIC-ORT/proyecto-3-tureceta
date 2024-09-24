import fs from "fs"
import {onEvent,sendEvent,startServer, } from "soquetic";
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
            break; // Detener el bucle si encuentra coincidencia
        }
        if (!ok) {
            console.log("Correo o contraseña incorrectos");
        }

        sendEvent("loginOK",ok);
}

}


onEvent("login",loginBack);

startServer()

