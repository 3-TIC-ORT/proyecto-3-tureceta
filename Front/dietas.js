const contenedor = document.querySelector(".container")


comidas.forEach(comida => {
    const tarj = document.createElement('div');
    tarj.classList.add('tarjeta');

    const nombre = document.createElement('h3');
    nombre.innerHTML = `${comida.nombre} (${comida.categoria})`;
    nombre.classList.add(`categoria`)
  



    const ingredientesList = document.createElement('ul');
    comida.ingredientes.forEach(ingrediente => {
      const li = document.createElement('li');
      li.textContent = ingrediente;
      ingredientesList.appendChild(li);
    });
    
    tarj.appendChild(nombre);
    tarj.appendChild(ingredientesList);
    
    contenedor.appendChild(tarj);

  });