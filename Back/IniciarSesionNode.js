import fs from "fs"
import {onEvent,startServer} from "soquetic";
let usuarios = fs.readFileSync("usuarios.json","utf-8");
usuarios = JSON.parse(usuarios);
function loginBack(info){
let { correo, contraseña } = info;
let ok = false;

    for (let i = 0; i<usuarios.length;i++){

        if (usuarios[i].correo === correo && usuarios[i].contraseña === contraseña){
            console.log("Bienvenido, " + usuarios[i].nombre);
            ok = true;
            break;
             }
             
        } 
        if (ok = false) {
            console.log("La contraseña o el correo es incorrecto");
          }



}
onEvent("login",loginBack)

startServer()

