import fs from 'fs';

// Función para transformar los datos al formato específico
function transformarDatos() {
  try {
    // Leer los datos originales desde Recetas.json
    const rawData = JSON.parse(fs.readFileSync('Recetas.json', 'utf-8'));

    // Transformar los datos al formato deseado
    const recetasTransformadas = rawData.results.map(recipe => ({
      nombre: recipe.title,
      calorias: `${recipe.nutrition.nutrients[0].amount} kcal`,
      proteinas: `${recipe.nutrition.nutrients[1].amount} g`,
      carbohidratos: `${recipe.nutrition.nutrients[2].amount} g`,
      ingredientes: recipe.nutrition.ingredients.map(ing => ({
        nombre: ing.name,
        calorias: `${ing.amount * ing.nutrients[0].amount} kcal`,
        proteinas: `${ing.amount * ing.nutrients[1].amount} g`,
        carbohidratos: `${ing.amount * ing.nutrients[2].amount} g`,
      })),
      receta: recipe.analyzedInstructions[0]?.steps.map(step => step.step) || []
    }));

    // Guardar los datos transformados en RecetasTransformadas.json
    fs.writeFileSync('API.json', JSON.stringify(recetasTransformadas, null, 2), 'utf-8');
    console.log("Datos transformados guardados en RecetasTransformadas.json");
  } catch (error) {
    console.error("Error al transformar los datos:", error.message);
  }
}

transformarDatos();

