import fs from "fs"
import {onEvent,startServer} from "soquetic";

function loginBack(correo, contraseña){
    let usuarios = fs.readFileSync("usuarios.json","utf-8");
    usuarios = JSON.parse(usuarios);
     
    
     
    for (let i = 0; i<usuarios.length;i++){
        if (usuarios[i].correo === correo && usuarios[i].contraseña === contraseña){
            console.log("Bienvenido, " + usuarios[i].nombre);
            return true;
        }
    }
    console.log("La contraseña o el correo es incorrecto")
    return false;
}
onEvent("login",loginBack)

startServer()

