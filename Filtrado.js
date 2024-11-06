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

    function crearAlmuerzo(){
        let noCumple = true;
        while(noCumple){
            let receta = recetas[random(recetas.length)];
            if (!receta.tipo.includes("almuerzo")){
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

    function crearDesayuno(recetasDelDia){
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

    function crearMerienda(recetasDelDia){
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


    function crearCena(recetasDelDia){
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
            if (probadas.includes(receta.nombre)){
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

    function crearDia(){
        let recetasDelDia = []
        let rec1 = crearAlmuerzo();
        recetasDelDia.push(rec1);
        dia.almuerzo = rec1;

        let rec2 = crearDesayuno(recetasDelDia);
        recetasDelDia.push(rec2);
        dia.desayuno = rec2;

        let rec3 = crearMerienda(recetasDelDia);
        recetasDelDia.push(rec3);
        dia.merienda = rec3;
        
        let rec4 = crearCena(recetasDelDia);
        recetasDelDia.push(rec4);
        dia.cena = rec4;
    }

    let dia = {cena:false};
    for(let sadi in dias){
        while(dia.cena === false){
            crearDia()
            console.log("en bucle...")
        }
        dias[sadi] = dia;
    }
    return dias;
})


startServer()