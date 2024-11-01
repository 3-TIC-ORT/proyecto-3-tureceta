const container = document.querySelector(".cajagrandota");





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

          // Lógica para mostrar la receta al hacer clic en "Receta ▼"
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

// Función para mostrar la receta
function mostrarReceta(receta) {
  const recetaModal = document.createElement("div");
  recetaModal.classList.add("recetadesplegable");
  recetaModal.innerHTML = `
      <h4>Ingredientes</h4>
      <ul class="ingredient-list">
          ${receta.ingredientes.map(ing => `<li>${ing}</li>`).join('')}
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