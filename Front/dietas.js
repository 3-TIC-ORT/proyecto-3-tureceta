connect2Server()

postData("pedirDietas",JSON.parse(localStorage.getItem("info")),(dias)=>{
    let dietas = {};
    for(let i in dias){
        dietas[i] = {};
        dietas[i].Desayuno = dias[i].desayuno;
        dietas[i].Almuerzo = dias[i].almuerzo;
        dietas[i].Merienda = dias[i].merienda;
        dietas[i].Cena = dias[i].cena;
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
            listaDeIngredientes="";
            for(let w of dietas[i][f].ingredientes){
                listaDeIngredientes+=`<li>${w.cantidad} ${w.unidad} ${w.nombre}</li>`;
            }
            console.log(listaDeIngredientes);
            todo.innerHTML += `
            <div class="comida">
            <h3 class="tituloComida">${f}</h3>
            <section class="infoNutricional">
                <div class="calorias">
                    <p class="titulo">Calorías</p>
                    <p class="info" id="calorias">${dietas[i][f].calorias}</p>
                </div>
                <div class="calorias">
                    <p class="titulo">Proteínas</p>
                    <p class="info" id="proteínas">${dietas[i][f].proteinas}</p>
                </div>
                <div class="calorias">
                    <p class="titulo">Carbohidratos</p>
                    <p class="info" id="carbohidratos">${dietas[i][f].carbohidratos}</p>
                </div>
            </section>
            <h3 class="nombreComida" id="nombreComida">${dietas[i][f].nombre}</h3>
            <div class="imgDeLaComida"><img src="pruebasFoto.png" alt="Imagen comida" class="imgComida"></div>
            <div class="buttonFlecha" id="-${f}-${i}">
                <p class="boton">Receta</p>
                <img class="flecha" id="${f}-${i}--" src="flecha.png" alt="">
            </div>
            <div class="infoExtra1" id="${f}-${i}">
                <h2 class="tituloReceta">Ingredientes</h2>
                <ul class="listaDeIngredientes">
                    ${listaDeIngredientes}
                </ul>
                <h2 class="tituloReceta">Receta</h2>
                <p class="receta">-${dietas[i][f].preparación}-</p>
                <div class="cambiarReceta">
                    <p class="cambiarP1">No te gusto la receta?</p>
                    <img class="cambiarRecetaFoto" src="./cambiarReceta.png" alt="">
                    <p class="cambiarP2">Genera una nueva comida en segundos.</p>
                </div>
            </div>
        </div>`
        }
    }
    
    let flechas = document.querySelectorAll(".buttonFlecha")
    for(let flecha of flechas){
        flecha.addEventListener("click",()=>{
            let nuevoId = ""
            for (let i in flecha.id){
                if (i != 0){
                    nuevoId+= flecha.id[i];w
                }
            }
            document.getElementById(nuevoId).classList.toggle("infoExtra");
            document.getElementById(nuevoId+"--").classList.toggle("flechaAlreves");
        })
}


})







// flecha.addEventListener("click",()=>{
//     document.querySelector(".infoExtra1").classList.toggle("infoExtra")
    
// })



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

