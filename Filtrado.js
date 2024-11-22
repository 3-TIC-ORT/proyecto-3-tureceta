import { info } from "console"
import fs from "fs"
import {onEvent,startServer} from "soquetic"


onEvent("pedirDietas", (datos)=>{
    let caloriasPc = datos.calorias
    let protePc = datos.proteinas
    let carboPc = datos.carbohidratos;

    let recetas = JSON.parse(fs.readFileSync("Recetas.json"))


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
    let recetas = JSON.parse(fs.readFileSync("Recetas.json"))

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
    let users = JSON.parse(fs.readFileSync("Back/Login/usuarios.json"));
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