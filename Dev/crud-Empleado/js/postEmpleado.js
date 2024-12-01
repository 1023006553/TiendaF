document.addEventListener("DOMContentLoaded", () => {
  

    const registrar = document.getElementById("registrar");

    registrar.addEventListener("click", (e) => {
      e.preventDefault(); // Si deseas prevenir la acción predeterminada del formulario
      
      const Nombre = document.getElementById("Nombre").value;
      const Apellido = document.getElementById("Apellido").value;
      const FechaNacimiento = document.getElementById("FechaNacimiento").value;
      const FechaContratacion = document.getElementById("FechaContratacion").value;
      const Salario = document.getElementById("Salario").value;
      const Correo = document.getElementById("Correo").value;
      const Telefono = document.getElementById("Telefono").value;
    
        const data = {
           
            Nombre: Nombre,
            Apellido: Apellido,
            FechaNacimiento: FechaNacimiento,
            FechaContratacion: FechaContratacion,
            Salario: Salario,
            Correo: Correo,
            Telefono: Telefono
        }

        function registrarEmpleado() {
          const Nombre = document.getElementById('Nombre').value;
          const Apellido = document.getElementById('Apellido').value;
          const FechaNacimiento = document.getElementById('FechaNacimiento').value;
          const FechaContratacion = document.getElementById('FechaContratacion').value;
          const Salario = document.getElementById('Salario').value;
          const  Correo = document.getElementById(' Correo').value;
          const Telefono = document.getElementById('Telefono').value;
      
          // Aquí puedes añadir el código para enviar los datos al servidor
          console.log({ Nombre, Apellido, FechaNacimiento, FechaContratacion, Salario, Correo,Telefono });
      
          // Cierra el modal y resetea el formulario
          $('#registroModal').modal('hide');
          document.getElementById('formRegistro').reset();
      }
      
        
        fetch("https://localhost:44389/api/Empleado", {
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

