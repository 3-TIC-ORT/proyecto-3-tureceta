function generarDieta() {
    const contenedor = document.getElementById("container");

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
                                    "Avena",
                                    "1 taza de leche",
                                    "1 cucharada de miel"
                                ],
                                descripcion: "Mezcla todos los ingredientes y cocina a fuego lento hasta obtener la consistencia deseada."
                            }
                        }
                    ]
                }
            ]
        },
        {
            dia: 2,
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
                                    "Avena",
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
        const encabezadoDia = document.createElement('div');
        encabezadoDia.classList.add('cajadeldia');
        encabezadoDia.innerHTML = `
            <h2 class="titulo-dia">Día ${dia.dia} 🥕</h2>
        `;
        contenedor.appendChild(encabezadoDia);
    
        const macros = document.createElement('div');
        macros.classList.add('macros');
        macros.innerHTML = `
            <div class="MT"><h2>Macronutrientes Totales</h2></div>
            <div class="contenedorTotal">
                <div class="cajaMacros">
                    <p>Calorías</p>
                    <p>${dia.calorias}</p>
                </div>
                <div>
                    <p>Proteína</p>
                    <p>${dia.proteina}</p>
                </div>
                <div>
                    <p>Carbohidratos</p>
                    <p>${dia.carbohidratos}</p>
                </div>
            </div>
        `;
        contenedor.appendChild(macros);
    
        const seccionDia = document.createElement('section');
        seccionDia.classList.add('cajagrandota');

        dia.comidas.forEach(comida => {
            const contenedorComida = document.createElement('div');
            contenedorComida.classList.add('cajacomida');
    
            const tituloComida = document.createElement('h3');
            tituloComida.textContent = comida.nombre;
            contenedorComida.appendChild(tituloComida);
    
            const infoComida = document.createElement('div');
            infoComida.classList.add('infocomida');
            infoComida.innerHTML = `
                <p>Calorías: ${comida.calorias}</p>
                <p>Proteína: ${comida.proteina}</p>
                <p>Carbohidratos: ${comida.carbohidratos}</p>
            `;
            contenedorComida.appendChild(infoComida);

            const botonNueva = document.createElement("button");
            botonNueva.classList.add("nueva");
            
    
            comida.alimentos.forEach(alimento => {
                const itemAlimento = document.createElement('div');
                itemAlimento.classList.add('comida');
                itemAlimento.innerHTML = `
                    <img src="${alimento.imagen}" alt="${alimento.nombre}" class="imagencomida">
                    <p>Calorías: ${alimento.calorias}</p>
                    <p>Proteína: ${alimento.proteina}</p>
                    <p>Carbohidratos: ${alimento.carbohidratos}</p>
                    <button class="boton-receta">Receta ▼</button>
                `;
    
                const botonReceta = itemAlimento.querySelector(".boton-receta");
                botonReceta.addEventListener("click", () => {
                    mostrarReceta(alimento);
                });
    
                contenedorComida.appendChild(itemAlimento);
            });
    
            seccionDia.appendChild(contenedorComida);
        });
    
        contenedor.appendChild(seccionDia);
    });
} 


function mostrarReceta(alimento) {
    const modalReceta = document.createElement("div");
    modalReceta.classList.add("recetadesplegable");

    const ingredientesHtml = alimento.receta.ingredientes.map(ing => `<li>${ing}</li>`).join('');

    modalReceta.innerHTML = `
        <h4>Receta de ${alimento.nombre}</h4>
        <p><strong>Ingredientes:</strong></p>
        <ul class="lista-ingredientes">
            ${ingredientesHtml}
        </ul>
        <h4>Instrucciones</h4>
        <p>${alimento.receta.descripcion}</p>
        <button class="cerrar-modal">Cerrar</button>
    `;

    document.body.appendChild(modalReceta);

    const botonCerrarModal = modalReceta.querySelector(".cerrar-modal");
    botonCerrarModal.addEventListener("click", () => {
        modalReceta.remove();
    });
}
generarDieta();



