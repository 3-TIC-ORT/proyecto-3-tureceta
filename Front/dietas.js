connect2Server()

let todasLasDietas;

document.getElementById("nombre").textContent = JSON.parse(localStorage.getItem("user"));

function pedirDietas(dias){
    let dietas = {};
    for(let i in dias){
        dietas[i] = {};
        dietas[i].Desayuno = dias[i].desayuno;
        dietas[i].Almuerzo = dias[i].almuerzo;
        dietas[i].Merienda = dias[i].merienda;
        dietas[i].Cena = dias[i].cena;
    }
    todasLasDietas = dietas;
    main(dietas);
}

postData("buscarRecetas",JSON.parse(localStorage.getItem("user")),(info)=>{
    if (info.ok === true && localStorage.getItem("info")){
        main(info.dietas);
    }else{
        if (localStorage.getItem("info") === "null"){
            document.querySelector(".titulo-dia").textContent = "No tienes recetas aún. ¡calcula tus macros primero!"
        }else{
            postData("pedirDietas",JSON.parse(localStorage.getItem("info")),pedirDietas);
        }
    }
})









function main(dietas){
    todo = document.querySelector("#todo");
    todo.innerHTML = '<div id="guardar">Guardar recetas</div>';
    for (let i in dietas){
        console.dir(dietas[i]);
        todo.innerHTML += `
        <div id="container">
            <div class="cajadeldia"><h2 class="titulo-dia" >Día ${i} 🥕</h2></div>
            <div class="macros">
                <div class="MT"><h2>Macronutrientes Totales</h2></div>
                <div class="contenedorTotal">
                    <div class="cajaMacros">
                        <p>Calorías</p>
                        <p>${Math.trunc(dietas[i].Desayuno.calorias + dietas[i].Almuerzo.calorias + dietas[i].Merienda.calorias + dietas[i].Cena.calorias)}</p>
                    </div>
                    <div>
                        <p>Proteína</p>
                        <p>${Math.trunc(dietas[i].Desayuno.proteinas + dietas[i].Almuerzo.proteinas + dietas[i].Merienda.proteinas + dietas[i].Cena.proteinas)}</p>
                    </div>
                    <div>
                        <p>Carbohidratos</p>
                        <p>${Math.trunc(dietas[i].Desayuno.carbohidratos + dietas[i].Almuerzo.carbohidratos + dietas[i].Merienda.carbohidratos + dietas[i].Cena.carbohidratos)}</p>
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
            <div class="comida" id="j${f}-${i}">
            <h3 class="tituloComida">${f}</h3>
            <section class="infoNutricional">
                <div class="calorias">
                    <p class="titulo">Calorías</p>
                    <p class="info" id="calorias">${Math.trunc(dietas[i][f].calorias)}</p>
                </div>
                <div class="calorias">
                    <p class="titulo">Proteínas</p>
                    <p class="info" id="proteínas">${Math.trunc(dietas[i][f].proteinas)}</p>
                </div>
                <div class="calorias">
                    <p class="titulo">Carbohidratos</p>
                    <p class="info" id="carbohidratos">${Math.trunc(dietas[i][f].carbohidratos)}</p>
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
                    <img class="cambiarRecetaFoto" id="p${f}-${i}" src="./cambiarReceta.png" alt="">
                    <p class="cambiarP2">Genera una nueva comida en segundos.</p>
                </div>
            </div>
        </div>`
        }
    }
    
    let flechas = document.querySelectorAll(".buttonFlecha")
    for(let flecha of flechas){
        flecha.addEventListener("click",()=>
        {mostrarReceta(flecha)})
    }
    
    function mostrarReceta(flecha){
        let nuevoId = ""
        for (let i in flecha.id){
            if (i != 0){
                nuevoId+= flecha.id[i];
            }
        }
        document.getElementById(nuevoId).classList.toggle("infoExtra");
        document.getElementById(nuevoId+"--").classList.toggle("flechaAlreves");
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

    let cambiarReceta = document.querySelectorAll(".cambiarRecetaFoto");
    for(let bot of cambiarReceta){
        bot.addEventListener("click",()=>{cambiar(bot)})
    }
    function cambiar(bot){
        let nuevoId = ""
        for (let i in bot.id){
            if (i != 0){
                nuevoId+= bot.id[i];
            }
        }
        let dia = "";
        let comida = "";
        let indice;
        for (let i in nuevoId){
            if (nuevoId[i] != "-"){
                comida+=nuevoId[i];
            }
            else{
                indice = i;
                break;
            }
        }
        for (let i in nuevoId){
            if (i > indice){
                dia+=nuevoId[i];
            }
            
        }
        let receta = dietas[dia][comida];
        postData("cambiarComida",receta,(nuevaReceta)=>{
            dietas[dia][comida] = nuevaReceta;
            main(dietas);
        })
    }
    let btnGuardar = document.getElementById("guardar");
    btnGuardar.addEventListener("click",()=>{
        let infoAGuardar = {};
        infoAGuardar.dietas = dietas;
        infoAGuardar.user = JSON.parse(localStorage.getItem("user"));
        postData("guardar",infoAGuardar);
    })

}