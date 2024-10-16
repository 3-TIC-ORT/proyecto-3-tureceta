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