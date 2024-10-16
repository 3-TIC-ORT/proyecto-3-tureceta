 

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
    let sexo = document.getElementById("sexo").value;
    let edad = document.getElementById("edad").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let actividad = document.getElementById("actividad").value;
    let objetivo = document.getElementById("objetivo").value;


let datos = {
    sexo: sexo,
    edad: edad,
    peso: peso,
    altura: altura,
    actividad: actividad, 
    objetivo: objetivo,

}    
postData("datos",datos, null, 2)
}




function postear(data){
    document.getElementById("calos").textContent = data;
}
function redirect() {
    window.location.href = "http://127.0.0.1:5500/Front/Respuesta.html";
}
botoncalcular.addEventListener("click", () => {
    fetchData("calcular", postear);
});