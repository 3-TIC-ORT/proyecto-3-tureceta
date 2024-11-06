import fs from 'fs';
import fetch from 'node-fetch';

const TRANSLATOR_API_KEY = 'tu_clave_de_traductor'; // Reemplaza con tu clave de Microsoft Translator
const TRANSLATOR_ENDPOINT = 'https://api.cognitive.microsofttranslator.com';

// Función para traducir un array de textos al español en una sola llamada
async function translateTexts(texts) {
    const url = `${TRANSLATOR_ENDPOINT}/translate?api-version=3.0&to=es`;
    const headers = {
        'Ocp-Apim-Subscription-Key': TRANSLATOR_API_KEY,
        'Content-type': 'application/json',
        'Ocp-Apim-Subscription-Region': 'your-region' // Reemplaza con tu región de Azure, como "eastus"
    };
    const body = JSON.stringify(texts.map(text => ({ Text: text })));

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: body
        });

        if (!response.ok) throw new Error(`Error en la traducción: ${response.statusText}`);

        const translations = await response.json();
        return translations.map(item => item.translations[0].text);
    } catch (error) {
        console.error("Error al traducir los textos:", error.message);
        return texts; // En caso de error, devuelve los textos originales
    }
}

// Función para traducir y actualizar las recetas en el archivo JSON
async function translateRecipesInFile() {
    const recipes = JSON.parse(fs.readFileSync("Recetas.json", "utf-8"));

    for (const recipe of recipes) {
        // Reúne todos los textos a traducir
        const textsToTranslate = [
            recipe.nombre,
            recipe.preparación,
            ...recipe.ingredientes.map(ing => ing.nombre)
        ];

        // Traduce todos los textos en una sola llamada
        const translatedTexts = await translateTexts(textsToTranslate);

        // Asigna los textos traducidos a los campos correspondientes
        recipe.nombre = translatedTexts[0];
        recipe.preparación = translatedTexts[1];

        recipe.ingredientes.forEach((ing, index) => {
            ing.nombre = translatedTexts[2 + index];
        });
    }

    // Guarda las recetas traducidas en el mismo archivo JSON
    fs.writeFileSync('Recetas.json', JSON.stringify(recipes, null, 2));
    console.log("Traducción completada y guardada en Recetas.json");
}

// Ejecuta la función de traducción
translateRecipesInFile();
