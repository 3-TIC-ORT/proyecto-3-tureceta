import fs from "fs";
import {onEvent, startServer} from "soquetic";

let listarda = JSON.parse(fs.readFileSync("./Recetas.json", "utf-8"));

function crearLista() {
    let dietas = [
        {
            nombre: "Arroz con pollo",
            cal_g: "130 kcal",
            proteinas: "2.7 g",
            carbohidratos: "28 g"
        },
        {
            nombre: "Pollo a la plancha",
            cal_g: "165 kcal",
            proteinas: "31 g",
            carbohidratos: "0 g"
        },
        {
            nombre: "Papa hervida",
            cal_g: "77 kcal",
            proteinas: "2 g",
            carbohidratos: "17 g"
        },
        {
            nombre: "Lentejas",
            cal_g: "116 kcal",
            proteinas: "9 g",
            carbohidratos: "20 g"
        },
        {
            nombre: "Pan de trigo",
            cal_g: "265 kcal",
            proteinas: "9 g",
            carbohidratos: "49 g"
        },
        {
            nombre: "Queso mozzarella",
            cal_g: "280 kcal",
            proteinas: "22 g",
            carbohidratos: "2.2 g"
        },
        {
            nombre: "Bife de carne",
            cal_g: "250 kcal",
            proteinas: "26 g",
            carbohidratos: "0 g"
        },
        {
            nombre: "Fideos",
            cal_g: "158 kcal",
            proteinas: "5.8 g",
            carbohidratos: "30 g"
        },
        {
            nombre: "Atún enlatado",
            cal_g: "116 kcal",
            proteinas: "26 g",
            carbohidratos: "0 g"
        },
        {
            nombre: "Choclo",
            cal_g: "86 kcal",
            proteinas: "3.3 g",
            carbohidratos: "19 g"
        },
        {
            nombre: "Yogur",
            cal_g: "59 kcal",
            proteinas: "3.5 g",
            carbohidratos: "4.7 g"
        },
        {
            nombre: "Manzana",
            cal_g: "52 kcal",
            proteinas: "0.3 g",
            carbohidratos: "14 g"
        },
        {
            nombre: "Batata",
            cal_g: "86 kcal",
            proteinas: "1.6 g",
            carbohidratos: "20 g"
        },
        {
            nombre: "Espinaca",
            cal_g: "23 kcal",
            proteinas: "2.9 g",
            carbohidratos: "3.6 g"
        },
        {
            nombre: "Zanahoria",
            cal_g: "41 kcal",
            proteinas: "0.9 g",
            carbohidratos: "10 g"
        },
        {
            nombre: "Lechuga",
            cal_g: "15 kcal",
            proteinas: "1.4 g",
            carbohidratos: "2.9 g"
        },
        {
            nombre: "Tomate",
            cal_g: "18 kcal",
            proteinas: "0.9 g",
            carbohidratos: "3.9 g"
        },
        {
            nombre: "Huevo duro",
            cal_g: "155 kcal",
            proteinas: "13 g",
            carbohidratos: "1.1 g"
        },
        {
            nombre: "Milanesa de soja",
            cal_g: "130 kcal",
            proteinas: "11 g",
            carbohidratos: "9 g"
        },
        {
            nombre: "Fideos integrales",
            cal_g: "140 kcal",
            proteinas: "5 g",
            carbohidratos: "30 g"
        },
        {
            nombre: "Quinoa",
            cal_g: "120 kcal",
            proteinas: "4.1 g",
            carbohidratos: "21.3 g"
        },
        {
            nombre: "Peceto",
            cal_g: "200 kcal",
            proteinas: "30 g",
            carbohidratos: "0 g"
        },
        {
            nombre: "Tarta de acelga",
            cal_g: "180 kcal",
            proteinas: "8 g",
            carbohidratos: "15 g"
        },
        {
            nombre: "Hamburguesa de carne",
            cal_g: "250 kcal",
            proteinas: "15 g",
            carbohidratos: "14 g"
        },
        {
            nombre: "Empanada de carne",
            cal_g: "290 kcal",
            proteinas: "12 g",
            carbohidratos: "29 g"
        },
        {
            nombre: "Polenta",
            cal_g: "70 kcal",
            proteinas: "2 g",
            carbohidratos: "15 g"
        },
        {
            nombre: "Papas fritas",
            cal_g: "312 kcal",
            proteinas: "3.4 g",
            carbohidratos: "41 g"
        },
        {
            nombre: "Cebolla",
            cal_g: "40 kcal",
            proteinas: "1.1 g",
            carbohidratos: "9.3 g"
        },
        {
            nombre: "Almendras",
            cal_g: "579 kcal",
            proteinas: "21 g",
            carbohidratos: "22 g"
        },
        {
            nombre: "Frutillas",
            cal_g: "32 kcal",
            proteinas: "0.7 g",
            carbohidratos: "7.7 g"
        },
        {
            nombre: "Pechuga de pollo",
            cal_g: "165 kcal",
            proteinas: "31 g",
            carbohidratos: "0 g"
        },
        {
            nombre: "Salmón",
            cal_g: "206 kcal",
            proteinas: "22 g",
            carbohidratos: "0 g"
        },
        {
            nombre: "Pescado blanco (merluza)",
            cal_g: "80 kcal",
            proteinas: "17 g",
            carbohidratos: "0 g"
        },
        {
            nombre: "Frijoles (poroto)",
            cal_g: "127 kcal",
            proteinas: "8.7 g",
            carbohidratos: "22 g"
        },
        {
            nombre: "Quinoa",
            cal_g: "120 kcal",
            proteinas: "4.1 g",
            carbohidratos: "21.3 g"
        },
        {
            nombre: "Semillas de chía",
            cal_g: "486 kcal",
            proteinas: "16.5 g",
            carbohidratos: "42 g"
        },
        {
            nombre: "Huevo",
            cal_g: "155 kcal",
            proteinas: "13 g",
            carbohidratos: "1.1 g"
        },
        {
            nombre: "Sopa de verduras",
            cal_g: "40 kcal",
            proteinas: "1.2 g",
            carbohidratos: "9.5 g"
        },
        {
            nombre: "Nueces",
            cal_g: "654 kcal",
            proteinas: "15 g",
            carbohidratos: "14 g"
        },
        {
            nombre: "Aceitunas",
            cal_g: "145 kcal",
            proteinas: "0.8 g",
            carbohidratos: "4 g"
        },
        {
            nombre: "Batido de frutas",
            cal_g: "50 kcal",
            proteinas: "1 g",
            carbohidratos: "13 g"
        },
        {
            nombre: "Berenjena",
            cal_g: "25 kcal",
            proteinas: "1 g",
            carbohidratos: "5.9 g"
        }
    ];

    // Agregar la lista de comidas al JSON existente
    listarda.push(...comidas);

    // Guardar en el archivo Recetas.json
    fs.writeFileSync("./Recetas.json", JSON.stringify(listarda, null, 2));
}

crearLista();
