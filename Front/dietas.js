connect2Server()

postData("pedirDietas",JSON.parse(localStorage.getItem("info")),(dias)=>{
    let caloriasTotalesAlDia = JSON.parse(localStorage.getItem("info"));
    caloriasTotalesAlDia.calorias = Math.trunc(caloriasTotalesAlDia.calorias)
    caloriasTotalesAlDia.proteinas = Math.trunc(caloriasTotalesAlDia.proteinas)
    caloriasTotalesAlDia.carbohidratos = Math.trunc(caloriasTotalesAlDia.carbohidratos)

    container = document.getElementById("container");
    container.innerHTML = "";
    for (let i in dias){

    }
    container.innerHTML += `
    <div id="container">
            <div class="cajadeldia"><h2 class="titulo-dia" >Día ${dia} 🥕</h2></div>
            <div class="macros">
                <div class="MT"><h2>Macronutrientes Totales</h2></div>
                <div class="contenedorTotal">
                    <div class="cajaMacros">
                        <p>Calorías</p>
                        <p>${caloriasTotalesAlDia.calorias}</p>
                    </div>
                    <div>
                        <p>${caloriasTotalesAlDia.proteinas}</p>
                        <p>99</p>
                    </div>
                    <div>
                        <p>Carbohidratos</p>
                        <p>${caloriasTotalesAlDia.carbohidratos}</p>
                    </div>
                </div>
            </div>
        </div>`
})







// function mostrarReceta(alimento) {
//     const modalReceta = document.createElement("div");
//     modalReceta.classList.add("recetadesplegable");

//     const ingredientesHtml = alimento.ingredientes.map(ing => `<li>${ing}</li>`).join('');

//     modalReceta.innerHTML = `
//         <h4>Receta de ${alimento.nombre}</h4>
//         <p><strong>Ingredientes:</strong></p>
//         <ul class="lista-ingredientes">
//             ${ingredientesHtml}
//         </ul>
//         <h4>Instrucciones</h4>
//         <p>${alimento.receta}</p>
//         <button class="cerrar-modal">Cerrar</button>
//     `;

//     document.body.appendChild(modalReceta);

//     const botonCerrarModal = modalReceta.querySelector(".cerrar-modal");
//     botonCerrarModal.addEventListener("click", () => {
//         modalReceta.remove();
//     });
// }

