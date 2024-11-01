import fs from 'fs';

function transformarDatos() {
  try {
    const rawData = JSON.parse(fs.readFileSync('Recetas.json', 'utf-8'));

    // Transformar los datos al formato deseado, con validación para evitar errores
    const recetasTransformadas = rawData.results.map(recipe => ({
      nombre: recipe.title || "Nombre no disponible",
      calorias: recipe.nutrition?.nutrients?.[0]?.amount ? `${recipe.nutrition.nutrients[0].amount} kcal` : "Información no disponible",
      proteinas: recipe.nutrition?.nutrients?.[1]?.amount ? `${recipe.nutrition.nutrients[1].amount} g` : "Información no disponible",
      carbohidratos: recipe.nutrition?.nutrients?.[2]?.amount ? `${recipe.nutrition.nutrients[2].amount} g` : "Información no disponible",
      ingredientes: recipe.nutrition?.ingredients?.map(ing => ({
        nombre: ing.name || "Ingrediente no disponible",
        calorias: ing.nutrients?.[0]?.amount ? `${ing.amount * ing.nutrients[0].amount} kcal` : "Información no disponible",
        proteinas: ing.nutrients?.[1]?.amount ? `${ing.amount * ing.nutrients[1].amount} g` : "Información no disponible",
        carbohidratos: ing.nutrients?.[2]?.amount ? `${ing.amount * ing.nutrients[2].amount} g` : "Información no disponible",
      })) || [],
      receta: recipe.analyzedInstructions?.[0]?.steps?.map(step => step.step) || ["Instrucciones no disponibles"]
    }));

    // Guardar los datos transformados en RecetasTransformadas.json
    fs.writeFileSync('RecetasTransformadas.json', JSON.stringify(recetasTransformadas, null, 2), 'utf-8');
    console.log("Datos transformados guardados en RecetasTransformadas.json");
  } catch (error) {
    console.error("Error al transformar los datos:", error.message);
  }
}

transformarDatos();

