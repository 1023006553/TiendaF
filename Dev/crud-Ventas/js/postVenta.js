document.addEventListener("DOMContentLoaded", () => {
  

    const registrar = document.getElementById("registrar");

    registrar.addEventListener("click", (e) => {
      e.preventDefault(); // Si deseas prevenir la acción predeterminada del formulario
      const ProductoID = document.getElementById("ProductoID").value;
      const CantidadVendida = document.getElementById("CantidadVendida").value;
      const FechaVenta = document.getElementById("FechaVenta").value;
    
        const data = {
          ProductoID: ProductoID,
          CantidadVendida: CantidadVendida,
          FechaVenta: FechaVenta,
            
        }

        function registrarVenta() {
          const ProductoID = document.getElementById("ProductoID").value;
          const CantidadVendida = document.getElementById("CantidadVendida").value;
          const FechaCreacion = document.getElementById("FechaCreacion").value;
      
          // Aquí puedes añadir el código para enviar los datos al servidor
          console.log({ ProductoID, CantidadVendida,FechaCreacion });
      
          // Cierra el modal y resetea el formulario
          $('#registroModal').modal('hide');
          document.getElementById('formRegistro').reset();
      }
      
        
        fetch("https://localhost:44389/api/Ventas", {
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

              window.location.href = "/Dev/crud-Ventas/view/EJEMPLO.HTML"

            } else {
              console.error("Error al enviar la solicitud:", response.status);
            }
          })
          .catch((error) => {
            console.error("Error al enviar la solicitud:", error);
          });
      });


})


