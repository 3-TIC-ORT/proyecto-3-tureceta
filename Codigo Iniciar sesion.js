document.getElementById("BotonLogin").addEventListener("click", function() {
    let MensajeError = document.getElementById("MensajeError").value;
    let contraseña = document.getElementById("contraseña").value
    let correo = document.getElementById("correo").value
      // Limpiar cualquier mensaje de error previo
      MensajeError.textContent = "";

      // Obtener el objeto del usuario desde localStorage
      let CorreoGuardado = localStorage.getItem(correo);
  
      // Verificar si el correo existe en localStorage
      if (!usuarioGuardado) {
          MensajeError.textContent = "No se encontró una cuenta con ese correo.";
          return; // Detiene el proceso si no se encuentra el correo
      }
  // Convertir el string almacenado en un objeto
  let usuario = JSON.parse(usuarioGuardado);

  // Verificar si la contraseña es correcta
  if (usuario.contraseña !== contraseña) {
      MensajeError.textContent = "La contraseña es incorrecta.";
      return; // Detiene el proceso si la contraseña es incorrecta
  }

  // Si la contraseña es correcta, redirigir al usuario a la página principal
  sessionStorage.setItem("usuarioActivo", usuario.nombre);
  window.location.href = 'pagina_principal.html';
});
    