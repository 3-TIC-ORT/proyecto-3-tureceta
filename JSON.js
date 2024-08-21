let usuario = {
    nombre: nombre,
    contraseña: contraseña,
    
};
}
FileSystem.writeFileSync("usuario.json",JSON.stringify(usuario))