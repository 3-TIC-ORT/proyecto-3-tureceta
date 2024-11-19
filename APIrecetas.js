import fs from 'fs';
import fetch from 'node-fetch';

const API_KEY = 'b07aa8718c1c4acebe11f8c897c3b5fe'; // Reemplazar con la key
const numRecipes = 100; // Numero de recetas
const recipes = JSON.parse(fs.readFileSync("Recetas.json"));

async function fetchRecipes() {
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=${numRecipes}&includeNutrition=true`;
    
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }

        const data = await response.json();
        data.recipes.forEach(recipe => {
            // Extrae las calorías, proteínas y carbohidratos
            const nutrients = recipe.nutrition?.nutrients || [];
            
            const formattedRecipe = {
                nombre: recipe.title,
                calorias: nutrients.find(n => n.name === 'Calories')?.amount || 0,
                proteinas: nutrients.find(n => n.name === 'Protein')?.amount || 0,
                carbohidratos: nutrients.find(n => n.name === 'Carbohydrates')?.amount || 0,
                tipo: recipe.dishTypes.includes('breakfast') ? ['desayuno'] : recipe.dishTypes.includes('snack') ? ['merienda'] : recipe.dishTypes.includes('main course') ? ['almuerzo',"cena"] : "no",
                ingredientes: recipe.extendedIngredients.map(ing => ({
                    nombre: ing.name,
                    cantidad: ing.amount,
                    unidad: ing.unit
                })),
                preparación: recipe.instructions || 'No hay instrucciones disponibles.'
            };

            if (formattedRecipe.tipo != "no"){
                recipes.push(formattedRecipe);
            }
            
        });

        // Guarda las recetas en un archivo JSON
        fs.writeFileSync('Recetas.json', JSON.stringify(recipes, null, 2));
        

    } catch (error) {
        console.error("Error al obtener la receta:", error.message);
    }
}

fetchRecipes();