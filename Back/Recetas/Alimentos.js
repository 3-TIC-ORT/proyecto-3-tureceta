import fs from "fs";
import {onEvent, startServer} from "soquetic";

let listarda = JSON.parse(fs.readFileSync("./Recetas.json", "utf-8"));

function crearLista() {
    let dietas = [
        {
            "nombre": "Ensalada de Papa",
            "cal_g": "200 calorías",
            "proteinas": "3 g",
            "carbohidratos": "30 g",
            "ingredientes": [
                { "nombre": "Papa", "cal_g": "100 calorías", "proteinas": "2 g", "carbohidratos": "20 g" },
                { "nombre": "Mayonesa", "cal_g": "50 calorías", "proteinas": "0 g", "carbohidratos": "1 g" },
                { "nombre": "Zanahoria", "cal_g": "25 calorías", "proteinas": "0.5 g", "carbohidratos": "5 g" },
                { "nombre": "Arvejas", "cal_g": "25 calorías", "proteinas": "0.5 g", "carbohidratos": "4 g" }
            ],
            "receta": [
                "Pelar y cortar las papas en cubos.",
                "Hervir las papas hasta que estén tiernas, luego dejarlas enfriar.",
                "En un bol grande, mezclar las papas, zanahorias y arvejas.",
                "Agregar mayonesa y mezclar bien.",
                "Servir frío como acompañamiento o entrada."
            ]
        },
        {
            "nombre": "Ensalada de Remolacha",
            "cal_g": "210 calorías",
            "proteinas": "3 g",
            "carbohidratos": "32 g",
            "ingredientes": [
                { "nombre": "Remolacha", "cal_g": "80 calorías", "proteinas": "2 g", "carbohidratos": "18 g" },
                { "nombre": "Mayonesa", "cal_g": "50 calorías", "proteinas": "0 g", "carbohidratos": "1 g" },
                { "nombre": "Papa", "cal_g": "80 calorías", "proteinas": "1 g", "carbohidratos": "13 g" }
            ],
            "receta": [
                "Hervir las remolachas hasta que estén tiernas y dejarlas enfriar.",
                "Cortar las remolachas y las papas en cubos.",
                "Mezclar todos los ingredientes en un bol grande.",
                "Agregar mayonesa y mezclar bien.",
                "Servir frío."
            ]
        }
    ];

    // Agregar la lista de comidas al JSON existente
    listarda.push(...dietas);

    // Guardar en el archivo Recetas.json
    fs.writeFileSync("./Recetas.json", JSON.stringify(listarda, null, 2));
}

crearLista();
startServer()