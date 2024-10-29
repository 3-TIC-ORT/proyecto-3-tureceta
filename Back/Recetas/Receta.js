import { onEvent,startServer } from "soquetic";
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
  
    return calorias
}


onEvent("datos",calcularCalorias)

startServer ()


//function(comdiasDesayuno){
//}





