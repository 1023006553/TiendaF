document.addEventListener("DOMContentLoaded", () => {
  const tabla = document.getElementById("cuerpoTabla");

  let inicioRegistros = 1;
  let tamañoMaximoRegistros = 1;

  /* function obtenerVenta(inicioRegistros) {
   fetch(`https://localhost:44389/api/Ventas/${inicioRegistros}/${tamañoMaximoRegistros} `  )
      .then((response) => response.json())
      .then((data) => {
        tabla.innerHTML = ""; 
        data.forEach((Ven) => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td class="text-center">${Ven.VentaID}</td>
            <td class="text-center">${Ven.ProductoID}</td>
            <td class="text-center">${Ven.CantidadVendida}</td>
            <td class="text-center">${Ven.PrecioVenta}</td>
            <td class="text-center">${Ven.FechaVenta}</td>
            <td> <button id="editar" value=${Ven.VentaID} class="btn btn-warning">editar</button> </td>
            <td> <button id="borrar" value=${Ven.VentaID} class="btn btn-danger">eliminar</button> </td>
              `;

          tabla.appendChild(row);
          console.log(data);
        });
      })
      .catch((error) =>
        console.error("Error al obtener datos de la API:", error)
      );
  }*/
  
      function obtenerVenta(inicioRegistros, filtro = "") {
        fetch(`https://localhost:44389/api/Ventas`)
            .then((response) => response.json())
            .then((data) => {
                tabla.innerHTML = ""; 
                data.forEach((Ven) => {
                    // Si hay un filtro, solo mostrar las ventas que coincidan
                    if (filtro === "" || Ven.VentaID.toString() === filtro) {
                        const row = document.createElement("tr");
                        row.innerHTML = `
                            <td class="text-center">${Ven.VentaID}</td>
                            <td class="text-center">${Ven.ProductoID}</td>
                            <td class="text-center">${Ven.CantidadVendida}</td>
                            <td class="text-center">${Ven.PrecioVenta}</td>
                            <td class="text-center">${Ven.FechaVenta}</td>
                            <td> <button id="editar" value=${Ven.VentaID} class="btn btn-warning">editar</button> </td>
                            <td> <button id="borrar" value=${Ven.VentaID} class="btn btn-danger">eliminar</button> </td>
                        `;
    
                        tabla.appendChild(row);
                    }
                });
                console.log(data);
            })
            .catch((error) =>
                console.error("Error al obtener datos de la API:", error)
            );
    }
    
    // Inicializar la tabla
    obtenerVenta();
    
    // Agregar un evento al botón de filtrar
    document.getElementById("filterButton").addEventListener("click", () => {
        const filtro = document.getElementById("filterInput").value;
        obtenerVenta("", filtro); // Llamar a la función con el filtro
    });
    

 /* //-----------------------------------------------------------------------------------------------------//
  document.getElementById("paginaAnterior").addEventListener("click", () => {
    if (inicioRegistros > 1) {
      inicioRegistros--;
      obtenerVenta(inicioRegistros);
    }
  });
  //-----------------------------------------------------------------------------------------------------//

  document.getElementById("paginaSiguiente").addEventListener("click", () => {
    inicioRegistros++;
    obtenerVenta(inicioRegistros);
  });

  //-----------------------------------------------------------------------------------------------------//*/
  tabla.addEventListener("click", (event) => {
    if (event.target.id == "borrar") {
      const confirmacion = confirm(
        "¿Estás seguro de que deseas eliminar este registro?"
      );

      if (confirmacion == true) {
        fetch(`https://localhost:44389/api/Ventas/${event.target.value}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error al eliminar el usuario");
            }

            event.target.closest("tr").remove();
          })
          .catch((error) => console.error("Error al eliminar usuario:", error));
      }
    } else if (event.target.id == "editar") {
      window.location.href = "../view/editar.html?id=" + event.target.value; // Agrega el parámetro a la URL
    }
    
    
  });
});

