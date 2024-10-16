import { onEvent, startServer } from "soquetic";

function calcularCalorias(sexo, peso, altura, edad, actividad, objetivo) {
    let tmb;

    if (sexo === "hombre") {
      tmb = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * edad);
    } else if (sexo === "mujer") {
      tmb = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * edad);
    } else {
      throw new Error("Género no válido. Debe ser 'hombre' o 'mujer'.");
    }
  
    // Factor de actividad
    const factores = {
        "sedentario": 1.2,
        "ligera": 1.375,
        "activa": 1.55,
        "intensa": 1.725,
        "muy intensa": 1.9
    };
    const factorActividad = factores[actividad]
    let calorias = tmb * factorActividad;
  
    if (objetivo = "subir peso") {
        tmb += 500,
        (objetivo = "bajar peso")
        tmb -= 500,
        (objetivo = "mantener peso")
        tmb = tmb 
    }
    return tmb
    // Ajuste según objetivo
    //switch (objetivo) {
      //case "perder":
        //calorias -= 500;
        //break;
      //case "mantener":
        //break;
      //case "ganar":
        //calorias += 500;
        //break;
      //default:
       // throw new Error("Objetivo no válido.");
    //}
  
    //return Math.round(calorias);
    /////////////////////////////////////////////////////////////////////
    function calcularMacronutrientes(calorias) {
      // Reparto estándar: 25% proteínas, 50% carbohidratos, 25% grasas
      const proteinasKcal = calorias * 0.25;
      const carbohidratosKcal = calorias * 0.50;
      const grasasKcal = calorias * 0.25;
    
      return {
        proteinas: Math.round(proteinasKcal / 4), // 1g proteína = 4 kcal
        carbohidratos: Math.round(carbohidratosKcal / 4), // 1g carbohidrato = 4 kcal
        grasas: Math.round(grasasKcal / 9) // 1g grasa = 9 kcal
      };
    }
    
    // Ejemplo de uso
    //const caloriasDiarias = calcularCalorias("hombre", 62, 168, 15, "ligera", "mantener");
    //const macros = calcularMacronutrientes(caloriasDiarias);
    
    //console.log(`Calorías diarias: ${caloriasDiarias} kcal`);
    //console.log(`Proteínas: ${macros.proteinas} g`);
    //console.log(`Carbohidratos: ${macros.carbohidratos} g`);
    //console.log(`Grasas: ${macros.grasas} g`);
  
  }
  
  
onEvent("datos", datos, calcularCalorias)









