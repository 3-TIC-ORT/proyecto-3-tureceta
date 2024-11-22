//////////////////////////LOGIN//////////////////////////
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
//////////////////////////REGISTRO//////////////////////////
const personas = JSON.parse(fs.readFileSync("../Back/Login/usuarios.json"));
function registrarseBack(info){
    let nombre = info.nombre;
    let correo = info.correo;
    let contraseña = info.contraseña;

    let usuarios = fs.readFileSync("../Back/Login/usuarios.json","utf-8");
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
///////////////////////////CALCULAR MACROS///////////////////////
function calcularCalorias({sexo, peso, altura, edad, actividad, objetivo}) {
    let tmb;

    if (sexo === "hombre") {
      tmb = 88.362 + (13.397 * Number(peso)) + (4.799 * Number(altura)) - (5.677 * Number(edad));
    } else if (sexo === "mujer") {
      tmb = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * edad);
    } else {
    }
  
    // Factor de actividad
    const factores = {
        "sedentario": 1.2,
        "ligeramente-activa": 1.375,
        "activo": 1.55,
        "muy-activo": 1.725,
        "extremadamente-activo": 1.9
    };
    const factorActividad = factores[actividad]

    if (objetivo === "subir") {
        tmb += 500
    }
    else if(objetivo === "Bajar"){
        tmb -= 500
    }
    else if(objetivo === "Mantenerse"){
        tmb = tmb
    }
    let calorias = tmb * factorActividad;
   // Cálculos adicionales de proteínas y carbohidratos
   const proteinas = Number(peso) * 1.6; // Ajustable según el peso y nivel de actividad
   const carbohidratos = (Number(calorias) * 0.5) / 4; // Aproximadamente el 50% de las calorías, 1g carbohidrato = 4 cal

   return {
      calorias: calorias,
      proteinas: Number(proteinas.toFixed(1)),
      carbohidratos: Number(carbohidratos.toFixed(1))
    }
};


onEvent("datos",calcularCalorias)

///////////////////////////FILTRADO DE RECETAS///////////////////////
import { info } from "console"


onEvent("pedirDietas", (datos)=>{
    let caloriasPc = datos.calorias
    let protePc = datos.proteinas
    let carboPc = datos.carbohidratos;

    let recetas = JSON.parse(fs.readFileSync("../Recetas.json"))


    function random(max) {
        return Math.floor(Math.random() * max);
    }

    let dias = {
        1 : {},
        2 : {},
        3 : {},
        4 : {},
        5 : {},
        6 : {},
        7 : {}
    }

    function crearAlmuerzo(recetasTotales){
        let noCumple = true;
        while(noCumple){
            let receta = recetas[random(recetas.length)];
            if (!receta.tipo.includes("almuerzo")){
                continue;
            }
            if(recetasTotales.includes(receta)){
                continue;
            }
            if (receta.calorias > caloriasPc*1.1){
                continue;
            }
            if (receta.proteinas > protePc*1.1){
                continue;
            }
            if (receta.carbohidratos > carboPc*1.1){
                continue;
            }
            return receta;
        }
    }

    function crearDesayuno(recetasDelDia,recetasTotales){
        let probadas = [];
        let noCumple = true;
        while(noCumple){
            let receta = recetas[random(recetas.length)];
            if (!receta.tipo.includes("desayuno")){
                probadas.push(receta.nombre);
                continue;
            }
            if (probadas.includes(receta.nombre)){
                continue;
            }
            if(recetasTotales.includes(receta)){
                continue;
            }
            if (recetasDelDia.includes(receta)){
                continue;
            }
            if (receta.calorias > caloriasPc*1.1){
                probadas.push(receta.nombre)
                continue;
            }
            if (receta.proteinas > protePc*1.1){
                probadas.push(receta.nombre)
                continue;
            }
            if (receta.carbohidratos > carboPc*1.1){
                probadas.push(receta.nombre);
                continue;
            }
            let suma = {
                calorias: receta.calorias,
                proteinas: receta.proteinas,
                carbohidratos: receta.carbohidratos
            };
            for(let i of recetasDelDia){
                suma.calorias += i.calorias;
                suma.proteinas += i.proteinas;
                suma.carbohidratos += i.carbohidratos;
            }
            if(suma.calorias > caloriasPc*1.1 || suma.proteinas > protePc*1.1 || suma.carbohidratos > carboPc*1.1){
                probadas.push(receta.nombre);
                continue;
            }
            return receta;
        }
    }

    function crearMerienda(recetasDelDia,recetasTotales){
        let probadas = [];
        let noCumple = true;
        while(noCumple){
            let receta = recetas[random(recetas.length)];
            if (!receta.tipo.includes("merienda")){
                probadas.push(receta.nombre);
                continue;
            }
            if (probadas.includes(receta.nombre)){
                continue;
            }
            if(recetasTotales.includes(receta)){
                continue;
            }
            if (recetasDelDia.includes(receta)){
                continue;
            }
            if (receta.calorias > caloriasPc*1.1){
                probadas.push(receta.nombre)
                continue;
            }
            if (receta.proteinas > protePc*1.1){
                probadas.push(receta.nombre)
                continue;
            }
            if (receta.carbohidratos > carboPc*1.1){
                probadas.push(receta.nombre);
                continue;
            }
            let suma = {
                calorias: receta.calorias,
                proteinas: receta.proteinas,
                carbohidratos: receta.carbohidratos
            };
            for(let i of recetasDelDia){
                suma.calorias += i.calorias;
                suma.proteinas += i.proteinas;
                suma.carbohidratos += i.carbohidratos;
            }
            if(suma.calorias > caloriasPc*1.1 || suma.proteinas > protePc*1.1 || suma.carbohidratos > carboPc*1.1){
                probadas.push(receta.nombre);
                continue;
            }
            return receta;
        }
    }


    function crearCena(recetasDelDia,recetasTotales){
        let probadas = [];
        let noCumple = true;
        let intentos = 0;
        while(noCumple && intentos<recetas.length){
            let receta = recetas[random(recetas.length)];
            if (!receta.tipo.includes("cena")){
                intentos+=1;
                probadas.push(receta);
                continue;
            }
            if (recetasDelDia.includes(receta)){
                continue;
            }
            if (probadas.includes(receta.nombre)){
                continue;
            }
            if(recetasTotales.includes(receta)){
                continue;
            }
            if (receta.calorias > caloriasPc*1.1){
                probadas.push(receta.nombre)
                intentos+=1;
                continue;
            }
            if (receta.proteinas > protePc*1.1){
                probadas.push(receta.nombre)
                intentos+=1;
                continue;
            }
            if (receta.carbohidratos > carboPc*1.1){
                probadas.push(receta.nombre)
                intentos+=1;
                continue;
            }
            let suma = {
                calorias: receta.calorias,
                proteinas: receta.proteinas,
                carbohidratos: receta.carbohidratos
            };
            for(let i of recetasDelDia){
                suma.calorias += i.calorias;
                suma.proteinas += i.proteinas;
                suma.carbohidratos += i.carbohidratos;
            }
            if(suma.calorias < caloriasPc*0.9 || suma.proteinas < protePc*0.9 || suma.carbohidratos < carboPc*0.9){
                probadas.push(receta.nombre);
                intentos+=1;
                continue;
            }
            if(suma.calorias > caloriasPc*1.1 || suma.proteinas > protePc*1.1 || suma.carbohidratos > carboPc*1.1){
                probadas.push(receta.nombre);
                intentos+=1;
                continue;
            }
            return receta;
        }
        return false;
    }

    function crearDia(recetasTotales){
        let recetasDelDia = []
        let rec1 = crearAlmuerzo(recetasTotales);
        recetasDelDia.push(rec1);
        dia.almuerzo = rec1;

        let rec2 = crearDesayuno(recetasDelDia,recetasTotales);
        recetasDelDia.push(rec2);
        dia.desayuno = rec2;

        let rec3 = crearMerienda(recetasDelDia,recetasTotales);
        recetasDelDia.push(rec3);
        dia.merienda = rec3;
        
        let rec4 = crearCena(recetasDelDia,recetasTotales);
        recetasDelDia.push(rec4);
        dia.cena = rec4;
        return recetasDelDia
    }
    
    let recetasTotales = [];
    let hastaAhora;
    let dia = {cena:false};
    while(dia.cena === false){
        hastaAhora = crearDia(recetasTotales)
    }
    recetasTotales = recetasTotales.concat(hastaAhora);
    dias[1] = dia;
    dia = {cena:false};
    while(dia.cena === false){
        hastaAhora = crearDia(recetasTotales)
    }
    recetasTotales = recetasTotales.concat(hastaAhora);
    dias[2] = dia;
    dia = {cena:false};
    while(dia.cena === false){
        hastaAhora = crearDia(recetasTotales)
    }
    recetasTotales = recetasTotales.concat(hastaAhora);
    dias[3] = dia;
    dia = {cena:false};
    while(dia.cena === false){
        hastaAhora = crearDia(recetasTotales)
    }
    recetasTotales = hastaAhora; //A PARTIR DE ESTE DÍA SE PUEDEN REPETIR (CAMBIAR A UN DIA MÁS TARDE SI PONEMOS MAS RECETAS)
    dias[4] = dia;
    dia = {cena:false};
    while(dia.cena === false){
        hastaAhora = crearDia(recetasTotales)
    }
    recetasTotales = recetasTotales.concat(hastaAhora);
    dias[5] = dia;
    dia = {cena:false};
    while(dia.cena === false){
        hastaAhora = crearDia(recetasTotales)
    }
    recetasTotales = recetasTotales.concat(hastaAhora);
    dias[6] = dia;
    dia = {cena:false};
    while(dia.cena === false){
        hastaAhora = crearDia(recetasTotales)
    }
    recetasTotales = recetasTotales.concat(hastaAhora);
    dias[7] = dia;
    return dias;
})


//Cambiar Receta

onEvent("cambiarComida",(receta)=>{
    let recetas = JSON.parse(fs.readFileSync("../Recetas.json"))

    function random(max) {
        return Math.floor(Math.random() * max);
    }
    let nuevaReceta = recetas[random(recetas.length)];
    while ( nuevaReceta.tipo.toString() != receta.tipo.toString() || nuevaReceta.calorias > receta.calorias*1.1 || nuevaReceta.calorias < receta.calorias*0.9 || nuevaReceta.nombre == receta.nombre){
        nuevaReceta = recetas[random(recetas.length)];
        console.log("en bucle...")
    }
    console.log(receta.calorias*0.9, nuevaReceta.calorias, receta.calorias*1.1)
    return nuevaReceta;
})

onEvent("guardar",(info)=>{
    let users = JSON.parse(fs.readFileSync("../Back/Login/usuarios.json"));
    for (let i in users){
        if (users[i].nombre === info.user){
            users[i].dietas = info.dietas;
            fs.writeFileSync("Back/Login/usuarios.json",JSON.stringify(users));
            return "mañu";
        }
    }
    
})

onEvent("buscarRecetas",(user)=>{
    let users = JSON.parse(fs.readFileSync("Back/Login/usuarios.json"));
    let info = {ok:false};
    for (let i in users){
        if (users[i].nombre === user){
            if (users[i].dietas != undefined){
                info.ok = true;
                info.dietas = users[i].dietas;
                return info;
            }
        }
    }
    return info;
})


startServer()






