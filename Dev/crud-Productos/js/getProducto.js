document.addEventListener("DOMContentLoaded", () => {
  const tabla = document.getElementById("cuerpoTabla");
  const filtroID = document.getElementById("filtroID"); // Campo de filtro por ID

  let inicioProductos = 1;
  let tamañoMaximoRegistros = 500;
  let productos = []; // Arreglo para almacenar los productos

  function obtenerProductos(inicioProductos) {
    fetch(`https://localhost:44389/api/Productos`)
      .then((response) => response.json())
      .then((data) => {
        productos = data; // Guardar los productos en el arreglo
        mostrarProductos(productos); // Mostrar los productos en la tabla
      })
      .catch((error) =>
        console.error("Error al obtener datos de la API:", error)
      );
  }

  function mostrarProductos(data) {
    tabla.innerHTML = "";
    data.forEach((pro) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td class="text-center">${pro.ProductoID}</td>
        <td class="text-center">${pro.Nombre}</td>
        <td class="text-center">${pro.Descripcion}</td>
        <td class="text-center">${pro.Precio}</td>
        <td class="text-center">${pro.Cantidad}</td>
        <td class="text-center">${pro.FechaCreacion}</td>
        <td><button id="editar" value=${pro.ProductoID} class="btn btn-warning">editar</button></td>
        <td><button id="borrar" value=${pro.ProductoID} class="btn btn-danger">eliminar</button></td>
      `;
      tabla.appendChild(row);
    });
  }

  obtenerProductos(inicioProductos);

  // Filtro por ID
  filtroID.addEventListener("input", () => {
    const idFiltro = filtroID.value.trim();
    const productosFiltrados = productos.filter((pro) =>
      pro.ProductoID.toString().includes(idFiltro)
    );
    mostrarProductos(productosFiltrados);
  });

  tabla.addEventListener("click", (event) => {
    if (event.target.id === "borrar") {
      const confirmacion = confirm("¿Estás seguro de que deseas eliminar este registro?");
      if (confirmacion) {
        fetch(`https://localhost:44389/api/Productos/${event.target.value}`, {
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
    } else if (event.target.id === "editar") {
      window.location.href = "../view/editar.html?id=" + event.target.value;
    }
  });
});

