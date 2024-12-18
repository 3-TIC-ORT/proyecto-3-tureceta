<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nivel de actividad</title>
    <link rel="stylesheet" href="preguntas.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Krona+One&family=Merienda:wght@300..900&display=swap" rel="stylesheet">
</head>
<body>

    <header class="arriba">
        <h1 class="nutriplan">NutriPlan</h1>
        <img src="logo.png" alt="" class="logo">
    </header>
    
    <div class="fondo">

    </div>
    <div class="container">
        <div class="genero">
            <div><h2>¿Cuál es tu género?</h2></div>
            
           
            <input type="radio" name="sexo" id="masculino">
            <label for="hombre">
                <img class="personita" src="hombre.png" alt="" srcset="">
                Hombre
            </label>
            
            
            <input type="radio" name="sexo" id="femenino">
            <label for="mujer">
                <img class="personita" src="mujer.png" alt="" srcset="">
                Mujer
            </label>
        </div>

        <H2>Altura</H2>

       <div> <input class="barrita" id= "altura" type="number" placeholder="Escribe tu altura en CM" min="1" required></div>
       
       <h2>Edad</h2>

       <div> <input class="barrita" id= "edad" type="number" placeholder="Escribe tu edad" min="1" required></div>

        <h2>Peso</h2>
        <div>  <input class="barrita" id="peso" type="number" placeholder="Escribe tu peso en KG" min="1" required></div>
           
    <h2>Nivel de actividad</h2>

    <div class="actividad-container" id="actividad">
        <div class="actividad-button" id="sedentario">
            Sedentario
            <br>
            Sin ejercicio formal y sin actividad física en la vida diaria.
        </div>
        <div class="actividad-button" id="ligeramente-activa">
            Ligeramente activa
            <br>
            Ejercicio ligero 1-3 días por semana.
        </div>
        <div class="actividad-button" id="activo">
            Activo
            <br>
            Haga ejercicio 4-5 veces por semana
        </div>
        <div class="actividad-button" id="muy-activo">
            Muy activo
            <br>
            Hago ejercicio 6-7 dias a la semana
        </div>
        <div class="actividad-button" id="extremadamente-activo">
            extremadamente activo
            <br>
            Hago ejercicio dos veces por dia
        </div>
        <H2>Objetivo</H2>
        <div id="objetivo">
            <div class="objetivo-button" id="Bajar">
                Bajar de peso
            </div>
            <div class="objetivo-button" id="Mantenerse">
                Mantenerme como estoy
            </div>
            <div class="objetivo-button" id="subir">
                Subir de peso
            </div>
    </div>
        <div>
            <div>
            <button   class= "resul" id="resultado">Calcular</button></div>
        </div>

        
        
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.7.4/socket.io.js"></script>
<script src="../socket.js"></script>
<script src="preguntas.js"></script>
</html>