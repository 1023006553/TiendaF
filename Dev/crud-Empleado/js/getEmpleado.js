document.addEventListener("DOMContentLoaded", () => {
  const tabla = document.getElementById("cuerpoTabla");
  const inputBuscar = document.getElementById("buscarPorId");

  let inicioRegistros = 1;

  function obtenerEmpleado(inicioRegistros) {
      fetch(`https://localhost:44389/api/Empleado`)
          .then((response) => response.json())
          .then((data) => {
              mostrarDatos(data);
          })
          .catch((error) =>
              console.error("Error al obtener datos de la API:", error)
          );
  }
  
  function mostrarDatos(data) {
      tabla.innerHTML = "";
      data.forEach((Empleado) => {
          const row = document.createElement("tr");
          row.innerHTML = `
              <td class="text-center">${Empleado.EmpleadoID}</td>
              <td class="text-center">${Empleado.Nombre}</td>
              <td class="text-center">${Empleado.Apellido}</td>
              <td class="text-center">${Empleado.FechaNacimiento}</td>
              <td class="text-center">${Empleado.FechaContratacion}</td>
              <td class="text-center">${Empleado.Salario}</td>
              <td class="text-center">${Empleado.Correo}</td>
              <td class="text-center">${Empleado.Telefono}</td>
              <td> <button id="editar" value=${Empleado.EmpleadoID} class="btn btn-warning">editar</button> </td>
              <td> <button id="borrar" value=${Empleado.EmpleadoID} class="btn btn-danger">eliminar</button> </td>
          `;

          tabla.appendChild(row);
      });
  }

  inputBuscar.addEventListener("input", () => {
      const valorBusqueda = inputBuscar.value;
      fetch(`https://localhost:44389/api/Empleado`)
          .then((response) => response.json())
          .then((data) => {
              const usuariosFiltrados = data.filter(Empleado => Empleado.EmpleadoID.toString().includes(valorBusqueda));
              mostrarDatos(usuariosFiltrados);
          })
          .catch((error) => console.error("Error al obtener datos de la API:", error));
  });

  obtenerEmpleado(inicioRegistros);

  tabla.addEventListener("click", (event) => {
      if (event.target.id === "borrar") {
          const confirmacion = confirm("¿Estás seguro de que deseas eliminar este registro?");
          if (confirmacion) {
              fetch(`https://localhost:44389/api/Empleado/${event.target.value}`, {
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
