import fs from "fs"
import {onEvent,sendEvent,startServer, } from "soquetic";
// Leer la lista de usuarios del archivo JSON    
let usuarios = fs.readFileSync("usuarios.json","utf-8");
usuarios = JSON.parse(usuarios);

export function loginBack(data){
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

startServer()

