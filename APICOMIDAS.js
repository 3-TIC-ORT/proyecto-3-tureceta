import fs from "fs";
import fetch from "node-fetch";



// URL de la API (ya incluye la API Key)
const url = `https://api.spoonacular.com/recipes/complexSearch?query=pasta&number=1&addRecipeNutrition=true&apiKey=781054bc57c746cc97aa38a880fcdfcb`;

// Función principal para obtener y guardar recetas
async function agregarRecetas() {
  try {
    // Hacer la solicitud usando el fetch nativo de Node.js
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data = await response.json();

    // Procesar los datos en el formato deseado
    const nuevasRecetas = data.results.map(recipe => ({
      nombre: recipe.title,
      calorias: recipe.nutrition.nutrients[0].amount + " kcal",
      proteinas: recipe.nutrition.nutrients[1].amount + " g",
      carbohidratos: recipe.nutrition.nutrients[2].amount + " g",
      ingredientes: recipe.nutrition.ingredients.map(ing => ({
        nombre: ing.name,
        calorias: ing.amount * ing.nutrients[0].amount + " kcal",
        proteinas: ing.amount * ing.nutrients[1].amount + " g",
        carbohidratos: ing.amount * ing.nutrients[2].amount + " g",
      })),
      receta: recipe.analyzedInstructions[0]?.steps.map(step => step.step) || []
    }));

    // Leer el archivo JSON existente (si tiene contenido)
    let recetasExistentes = [];
    if (fs.existsSync("Recetas.json")) {
      const contenidoActual = fs.readFileSync("Recetas.json", "utf-8");
      recetasExistentes = JSON.parse(contenidoActual);
    }

    // Combinar recetas existentes y nuevas
    const recetasActualizadas = [...recetasExistentes, ...nuevasRecetas];

    // Guardar todas las recetas en el archivo JSON
    fs.writeFileSync("Recetas.json", JSON.stringify(recetasActualizadas, null, 2), "utf-8");
    console.log("Recetas agregadas a recetas.json");
  } catch (error) {
    console.error("Error al obtener o guardar las recetas:", error.message);
  }
}

// Ejecutar la función para agregar recetas
agregarRecetas();
