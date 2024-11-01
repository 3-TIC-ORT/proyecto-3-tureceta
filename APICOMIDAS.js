// For Node.js: uncomment the line below if you need to import fetch
// const fetch = require('node-fetch');
import fs from "fs";



// Define the API endpoint and parameters
const url = `https://api.spoonacular.com/recipes/complexSearch?query=pasta&number=1&addRecipeNutrition=true&apiKey=2be1e475ebda497aa725e9523f7352e8`;

// Make the API call
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Access and display recipe data
 data.results.forEach(recipe => {
      console.log("Recipe name:", recipe.title);
      console.log("Calories:", recipe.nutrition.nutrients[0].amount, "kcal");
      console.log("Protein:", recipe.nutrition.nutrients[1].amount, "g");
      console.log("Carbohydrates:", recipe.nutrition.nutrients[2].amount, "g");
    });
  })
  .catch(error => console.error("Error fetching data:", error));
  fs.writeFileSync("./Recetas.json", JSON.stringify(data, null, 2));
