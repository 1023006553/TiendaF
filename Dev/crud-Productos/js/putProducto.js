document.addEventListener("DOMContentLoaded", () => {
  const btnEditar = document.getElementById("editar");

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
 
  const nombre = document.getElementById("nombre");
  const Descripcion = document.getElementById("Descripcion");
  const Precio = document.getElementById("Precio");
  const Cantidad = document.getElementById("Cantidad");
  const FechaCreacion = document.getElementById("FechaCreacion");

  fetch("https://localhost:44389/api/Productos/" + id)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((pro) => {
        nombre.value = pro.Nombre;
        Descripcion.value = pro.Descripcion;
        Precio.value = pro.Precio;
        Cantidad.value = pro.Cantidad;
        FechaCreacion.value = pro.FechaCreacion.substring(0,10);

      });
    })
    .catch((error) =>
      console.error("Error al obtener datos de la API:", error)
    );

  btnEditar.addEventListener("click", () => {

    const data = {
      "ProductoID":id,
      "nombre": nombre.value,
      "Descripcion": Descripcion.value,
      "Precio": Precio.value,
      "Cantidad": Cantidad.value,
      "FechaCreacion": FechaCreacion.value
  }


    fetch("https://localhost:44389/api/Productos/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        
        if (response.ok) {
          console.log("Datos enviados correctamente");
          window.location.href = "../view/index.html"
          
        } else {
          console.error("Error al enviar la solicitud:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
      });
  }); 
});
