import fs from 'fs';

function transformarDatos() {
  try {
    // Leer los datos directamente desde el archivo
    const rawData = JSON.parse(fs.readFileSync('Recetas.json', 'utf-8'));

    // Verificamos que los datos sean un array
    if (!Array.isArray(rawData)) {
      console.error("Error: Los datos no están en el formato de array esperado.");
      return;
    }

    // Transformar los datos al formato solicitado
    const recetasTransformadas = rawData.map(recipe => ({
      nombre: recipe.title || "Nombre no disponible",
      calorias: recipe.nutrition?.nutrients?.find(n => n.name === "Calories")?.amount || 0,
      proteinas: recipe.nutrition?.nutrients?.find(n => n.name === "Protein")?.amount || 0,
      carbohidratos: recipe.nutrition?.nutrients?.find(n => n.name === "Carbohydrates")?.amount || 0,
      ingredientes: recipe.nutrition?.ingredients?.map(ing => ({
        nombre: ing.name || "Ingrediente no disponible",
        cantidad: ing.amount || 0,
        calorias: ing.nutrients?.find(n => n.name === "Calories")?.amount || 0,
        proteinas: ing.nutrients?.find(n => n.name === "Protein")?.amount || 0,
        carbohidratos: ing.nutrients?.find(n => n.name === "Carbohydrates")?.amount || 0
      })) || []
    }));

    // Guardar los datos transformados en RecetasTransformadas.json
    fs.writeFileSync('RecetasTransformadas.json', JSON.stringify(recetasTransformadas, null, 2), 'utf-8');
    console.log("Recetas transformadas guardadas en RecetasTransformadas.json");
  } catch (error) {
    console.error("Error al transformar los datos:", error.message);
  }
}

transformarDatos();
