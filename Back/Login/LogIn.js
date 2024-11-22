import fs from "fs"
import {onEvent,startServer, } from "soquetic";
// Leer la lista de usuarios del archivo JSON    
let usuarios = fs.readFileSync("usuarios.json","utf-8");
usuarios = JSON.parse(usuarios);

export function loginBack(data){
    let info = {ok:false};

    for (let i = 0; i<usuarios.length; i++){
        if (usuarios[i].correo === data.correo && usuarios[i].contraseña === data.contraseña){
            console.log("Bienvenido, " + usuarios[i].nombre);
            info.ok = true; // Credenciales correctas
            info.user = usuarios[i].nombre;
            return info;
        }

        
}
return info
}


onEvent("login",loginBack);

startServer()

