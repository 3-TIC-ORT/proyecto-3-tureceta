connect2Server()

postData("pedirDietas",JSON.parse(localStorage.getItem("info")),(dias)=>{
    let dietas = {};
    for(let i in dias){
        dietas[i] = {};
        dietas[i].desayuno = dias[i].desayuno;
        dietas[i].almuerzo = dias[i].almuerzo;
        dietas[i].merienda = dias[i].merienda;
        dietas[i].cena = dias[i].cena;
    }
    let caloriasTotalesAlDia = JSON.parse(localStorage.getItem("info"));
    caloriasTotalesAlDia.calorias = Math.trunc(caloriasTotalesAlDia.calorias)
    caloriasTotalesAlDia.proteinas = Math.trunc(caloriasTotalesAlDia.proteinas)
    caloriasTotalesAlDia.carbohidratos = Math.trunc(caloriasTotalesAlDia.carbohidratos)
    todo = document.querySelector("#todo");
    todo.innerHTML = "";
    for (let i in dietas){
        todo.innerHTML += `
        <div id="container">
            <div class="cajadeldia"><h2 class="titulo-dia" >Día ${i} 🥕</h2></div>
            <div class="macros">
                <div class="MT"><h2>Macronutrientes Totales</h2></div>
                <div class="contenedorTotal">
                    <div class="cajaMacros">
                        <p>Calorías</p>
                        <p>2250</p>
                    </div>
                    <div>
                        <p>Proteína</p>
                        <p>99</p>
                    </div>
                    <div>
                        <p>Carbohidratos</p>
                        <p>30</p>
                    </div>
                </div>
            </div>
        </div>`

        for (let f in dietas[i]){
            todo.innerHTML += `
            <div class="comida">
            <h3 class="tituloComida" id="tituloComida">Desayuno</h3>
            <section class="infoNutricional">
                <div class="calorias">
                    <p class="titulo">Calorías</p>
                    <p class="info" id="calorias">521</p>
                </div>
                <div class="calorias">
                    <p class="titulo">Proteínas</p>
                    <p class="info" id="proteínas">521</p>
                </div>
                <div class="calorias">
                    <p class="titulo">Carbohidratos</p>
                    <p class="info" id="carbohidratos">521</p>
                </div>
            </section>
            <h3 class="nombreComida" id="nombreComida">Camarones salteados con carne</h3>
            <div class="imgDeLaComida"><img src="pruebasFoto.png" alt="Imagen comida" class="imgComida"></div>
            <div class="buttonFlecha">
                <p class="boton">Receta</p>
                <img class="flecha" src="flecha.png" alt="">
            </div>
            <div class="infoExtra" id="infoExtra">
                <h2 class="tituloReceta">Ingredientes</h2>
                <ul class="listaDeIngredientes">
                    <li>Camarones</li>
                    <li>Aviones</li>
                    <li>Salmon</li>
                </ul>
                <h2 class="tituloReceta">Receta</h2>
                <p class="receta">
                    Primero hacer toda la masa, mezclando harina, agua, y sal a gusto, luego meterlo todos los camarones, dejar reposar por media hora, y meter al horno a fuego moderado 2 horas. Una vez sacado del horno, pintar con yema de huevo, y meter a fuego alto 10 minutos nuevamente. Ahora si, a disfrutar.
                </p>
                <div class="cambiarReceta">
                    <p class="cambiarP1">No te gusto la receta?</p>
                    <img class="cambiarRecetaFoto" src="./cambiarReceta.png" alt="">
                    <p class="cambiarP2">Genera una nueva comida en segundos.</p>
                </div>
            </div>
        </div>`
        }
    }
    
})





let flecha = document.querySelector(".buttonFlecha")

flecha.addEventListener("click",()=>{
    document.querySelector(".cambiarReceta").style.display = 'block !important' 
    
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

