import fs from "fs";
import {onEvent,startServer} from "soquetic"
const personas = JSON.parse(fs.readFileSync("../Registrarse/usuarios.json"));
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
    let repeticion = false;
    personas.forEach(user => {
        if(info.nombre === user.nombre || info.correo === user.correo){
            repeticion = true;
        }
    });
    if (repeticion === true) {
    console.log("Nombre o Correo en uso");
    return false
    }
    
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
        return {ok : true};
        
    } else {
        // Mostrar un mensaje de error si el correo no es válido
        console.log("Por favor ingrese un correo válido");
        return false;
}}


onEvent("registrarse",registrarseBack);
startServer();