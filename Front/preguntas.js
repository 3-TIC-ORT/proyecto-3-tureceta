 

let activityButtons = document.querySelectorAll('.actividad-button');
        let activeButton = null;

        activityButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from previous button
                if (activeButton) {
                    activeButton.classList.remove('active');
                }

                // Add active class to the clicked button
                button.classList.add('active');

                // Update the active button
                activeButton = button;
            });
        });


        let ObjetivoButtons = document.querySelectorAll('.objetivo-button');
        let objetivoButton = null;

        ObjetivoButtons.forEach(button => {
            button.addEventListener('click', () => {
                if (objetivoButton) {
                   objetivoButton.classList.remove('active');
                }

            
                button.classList.add('active');
               objetivoButton = button;
            });
        });

let botoncalcular = document.getElementById("resultado")

function calculodatos (){
    let masculino = document.getElementById("masculino").checked;
    let femenino = document.getElementById("femenino").checked;
    let sexo;
    if (masculino){
        sexo = "hombre"
    }else if(femenino){
        sexo = "mujer"
    }
    let edad = document.getElementById("edad").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let actividadLista = [document.getElementById("sedentario"),document.getElementById("ligeramente-activa"),document.getElementById("activo"),document.getElementById("muy-activo"),document.getElementById("extremadamente-activo")];
    let actividad;
    let objetivoLista = [document.getElementById("Bajar"),document.getElementById("Mantenerse"),document.getElementById("subir")];
    let objetivo;
    for (let i of actividadLista){
        if(i.classList.contains("active")){
            actividad = i.id;
        }
    }
    for (let i of objetivoLista){
        if(i.classList.contains("active")){
            objetivo = i.id;
        }
    }

    console.log(sexo, edad, peso, altura, actividad, objetivo)
    if(sexo === undefined || edad === "" || peso === "" || altura === "" || actividad === undefined || objetivo === undefined){
        Swal.fire({
            title: 'Error',
            text: 'Debes completar todos los campos',
            icon: 'error',
            confirmButtonText: 'OK',
            background: '#fefae0', // Color de fondo personalizado
            color: '#333'          // Color del texto personalizado
        });
    }else{
        let datos = {
            sexo: sexo,
            edad: edad,
            peso: peso,
            altura: altura,
            actividad: actividad, 
            objetivo: objetivo,
    
        }    
        postData("datos",datos,(info)=>{
            localStorage.setItem("info",JSON.stringify(info.data))
            redirect()
        })

    }
}




function postear(data){
    document.getElementById("calos").textContent = data;
}
function redirect() {
    window.location.href = "http://127.0.0.1:5500/Front/Respuesta.html";
}
botoncalcular.addEventListener("click", () => {
    calculodatos()
});