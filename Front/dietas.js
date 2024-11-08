connect2Server()

postData("pedirDietas",JSON.parse(localStorage.getItem("info")),(dias)=>{
    let caloriasTotalesAlDia = JSON.parse(localStorage.getItem("info"));
    caloriasTotalesAlDia.calorias = Math.trunc(caloriasTotalesAlDia.calorias)
    caloriasTotalesAlDia.proteinas = Math.trunc(caloriasTotalesAlDia.proteinas)
    caloriasTotalesAlDia.carbohidratos = Math.trunc(caloriasTotalesAlDia.carbohidratos)

    const contenedor = document.getElementById("container");

    for(let dia in dias){
        const encabezadoDia = document.createElement('div');
        encabezadoDia.classList.add('cajadeldia');
        encabezadoDia.innerHTML = `
            <h2 class="titulo-dia">Día ${dia} 🥕</h2>
        `;
        contenedor.appendChild(encabezadoDia);
    
        const macros = document.createElement('div');
        macros.classList.add('macros');
        macros.innerHTML = `
            <div class="MT"><h2>Macronutrientes Totales</h2></div>
            <div class="contenedorTotal">
                <div class="cajaMacros">
                    <p>Calorías</p>
                    <p>${caloriasTotalesAlDia.calorias}</p>
                </div>
                <div>
                    <p>Proteína</p>
                    <p>${caloriasTotalesAlDia.proteinas}</p>
                </div>
                <div>
                    <p>Carbohidratos</p>
                    <p>${caloriasTotalesAlDia.carbohidratos}</p>
                </div>
            </div>
        `;
        contenedor.appendChild(macros);
    
        const seccionDia = document.createElement('section');
        seccionDia.classList.add('cajagrandota');

        for(let comida in dias[dia]){
            const contenedorComida = document.createElement('div');
            contenedorComida.classList.add('cajacomida');
    
            const tituloComida = document.createElement('h3');
            tituloComida.textContent = comida;
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
            const itemAlimento = document.createElement('div');
            itemAlimento.classList.add('comida');
            itemAlimento.innerHTML = `
                <img src="${"alimento.imagen"}" alt="${dias[dia][comida].nombre}" class="imagencomida">
                <p>Calorías: ${dias[dia][comida].calorias}</p>
                <p>Proteína: ${dias[dia][comida].proteinas}</p>
                <p>Carbohidratos: ${dias[dia][comida].carbohidratos}</p>
                <button class="boton-receta">Receta ▼</button>
            `;

            const botonReceta = itemAlimento.querySelector(".boton-receta");
            botonReceta.addEventListener("click", () => {
                mostrarReceta(dias[dia][comida]);
            });

            contenedorComida.appendChild(itemAlimento);

            seccionDia.appendChild(contenedorComida);
        };

        contenedor.appendChild(seccionDia);
    };
})







function mostrarReceta(alimento) {
    const modalReceta = document.createElement("div");
    modalReceta.classList.add("recetadesplegable");

    const ingredientesHtml = alimento.ingredientes.map(ing => `<li>${ing}</li>`).join('');

    modalReceta.innerHTML = `
        <h4>Receta de ${alimento.nombre}</h4>
        <p><strong>Ingredientes:</strong></p>
        <ul class="lista-ingredientes">
            ${ingredientesHtml}
        </ul>
        <h4>Instrucciones</h4>
        <p>${alimento.receta}</p>
        <button class="cerrar-modal">Cerrar</button>
    `;

    document.body.appendChild(modalReceta);

    const botonCerrarModal = modalReceta.querySelector(".cerrar-modal");
    botonCerrarModal.addEventListener("click", () => {
        modalReceta.remove();
    });
}

