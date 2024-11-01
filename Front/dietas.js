function generarDieta() {
    const container = document.getElementById("container");

    const dias = [
        {
            dia: 1,
            calorias: 2000,
            proteina: "100g",
            carbohidratos: "250g",
            comidas: [
                {
                    nombre: "Desayuno",
                    calorias: 500,
                    proteina: "20g",
                    carbohidratos: "60g",
                    alimentos: [
                        {
                            nombre: "Avena",
                            calorias: 200,
                            proteina: "5g",
                            carbohidratos: "30g",
                            imagen: "imagen_avena.png",
                            receta: {
                                ingredientes: [
                                    { nombre: "Avena", opciones: ["Avena", "Quinoa", "Cereal Integral"] },
                                    "1 taza de leche",
                                    "1 cucharada de miel"
                                ],
                                descripcion: "Mezcla todos los ingredientes y cocina a fuego lento hasta obtener la consistencia deseada."
                            }
                        }
                    ]
                }
            ]
        }
    ];

    dias.forEach(dia => {
        const daySection = document.createElement('section');
        daySection.classList.add('cajagrandota');

        const dayHeader = document.createElement('div');
        dayHeader.classList.add('cajadeldia');
        dayHeader.innerHTML = `<h2>Día ${dia.dia}</h2>`;
        daySection.appendChild(dayHeader);

        const macros = document.createElement('div');
        macros.classList.add('macros');
        macros.innerHTML = `
            <p>Calorías: ${dia.calorias}</p>
            <p>Proteína: ${dia.proteina}</p>
            <p>Carbohidratos: ${dia.carbohidratos}</p>
        `;
        daySection.appendChild(macros);

        dia.comidas.forEach(comida => {
            const mealContainer = document.createElement('div');
            mealContainer.classList.add('cajacomida');

            const mealTitle = document.createElement('h3');
            mealTitle.textContent = comida.nombre;
            mealContainer.appendChild(mealTitle);

            const mealInfo = document.createElement('div');
            mealInfo.classList.add('infocomida');
            mealInfo.innerHTML = `
                <p>Calorías: ${comida.calorias}</p>
                <p>Proteína: ${comida.proteina}</p>
                <p>Carbohidratos: ${comida.carbohidratos}</p>
            `;
            mealContainer.appendChild(mealInfo);

            comida.alimentos.forEach(alimento => {
                const foodItem = document.createElement('div');
                foodItem.classList.add('comida');
                foodItem.innerHTML = `
                    <img src="${alimento.imagen}" alt="${alimento.nombre}" class="imagencomida">
                    <p>Calorías: ${alimento.calorias}</p>
                    <p>Proteína: ${alimento.proteina}</p>
                    <p>Carbohidratos: ${alimento.carbohidratos}</p>
                    <button class="recipe-button">Receta ▼</button>
                `;

                const recipeButton = foodItem.querySelector(".recipe-button");
                recipeButton.addEventListener("click", () => {
                    mostrarReceta(alimento.receta);
                });

                mealContainer.appendChild(foodItem);
            });

            daySection.appendChild(mealContainer);
        });

        container.appendChild(daySection);
    });
}

function mostrarReceta(receta) {
    const recetaModal = document.createElement("div");
    recetaModal.classList.add("recetadesplegable");

    let ingredientesHtml = receta.ingredientes.map(ing => {
        if (typeof ing === "object" && ing.opciones) {
            return `
                <li>
                    <select class="ingredient-select">
                        ${ing.opciones.map(op => `<option value="${op}">${op}</option>`).join('')}
                    </select>
                </li>`;
        } else {
            return `<li>${ing}</li>`;
        }
    }).join('');

    recetaModal.innerHTML = `
        <h4>Ingredientes</h4>
        <ul class="ingredient-list">
            ${ingredientesHtml}
        </ul>
        <h4>Receta</h4>
        <p>${receta.descripcion}</p>
        <button class="close-modal">Cerrar</button>
    `;

    document.body.appendChild(recetaModal);

    const closeModal = recetaModal.querySelector(".close-modal");
    closeModal.addEventListener("click", () => {
        recetaModal.remove();
    });
}

// Ejecuta la función para generar la dieta
generarDieta();

