import fs from "fs"
let usuario = {
    nombre: nombre,
    contraseña: contraseña,

};
fs.writeFileSync("usuario.json",JSON.stringify(usuario))