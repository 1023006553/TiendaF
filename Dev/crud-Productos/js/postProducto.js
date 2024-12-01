document.addEventListener("DOMContentLoaded", () => {
  

    const registrar = document.getElementById("registrar");

    registrar.addEventListener("click", (e) => {
      e.preventDefault(); // Si deseas prevenir la acción predeterminada del formulario
      const ProductoID = document.getElementById("ProductoID").value;
      const Nombre = document.getElementById("Nombre").value;
      const Descripcion = document.getElementById("Descripcion").value;
      const Precio = document.getElementById("Precio").value;
      const Cantidad = document.getElementById("Cantidad").value;
      const FechaCreacion = document.getElementById("FechaCreacion").value;
    
        const data = {
            ProductoID: ProductoID,
            nombre: Nombre,
            Descripcion: Descripcion,
            Precio: Precio,
            Cantidad: Cantidad,
            FechaCreacion: FechaCreacion
        }

        function registrarProducto() {
          const Nombre = document.getElementById("nombre").value;
          const Descripcion = document.getElementById("Descripcion").value;
          const Precio = document.getElementById("Precio").value;
          const Cantidad = document.getElementById("Cantidad").value;
          const FechaCreacion = document.getElementById("FechaCreacion").value;
      
          // Aquí puedes añadir el código para enviar los datos al servidor
          console.log({ Nombre, Descripcion, Precio, Cantidad, FechaCreacion });
      
          // Cierra el modal y resetea el formulario
          $('#registroModal').modal('hide');
          document.getElementById('formRegistro').reset();
      }
      
        
        fetch("https://localhost:44389/api/Productos", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
          .then((response) => {
            // Verificar si la respuesta es exitosa (código de estado 200)
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


})

