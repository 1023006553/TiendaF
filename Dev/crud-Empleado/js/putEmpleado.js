document.addEventListener("DOMContentLoaded", () => {
  const btnEditar = document.getElementById("editar");

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
 
  const EmpleadoID = document.getElementById("EmpleadoID");
  const Nombre = document.getElementById("Nombre");
  const Apellido = document.getElementById("Apellido");
  const FechaNacimiento = document.getElementById("FechaNacimiento");
  const Salario = document.getElementById("Salario");
  const Correo = document.getElementById("Correo");
  const Telefono = document.getElementById("Telefono");
  

  fetch("https://localhost:44389/api/Empleado/" + id)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((Empleado) => {
        EmpleadoID.value = Empleado.EmpleadoID;
        Nombre.value = Empleado.Nombre;
        Apellido.value = Empleado.Apellido;
        FechaNacimiento.value = Empleado.FechaNacimiento;
        Salario.value = Empleado.Salario;
        Correo.value = Empleado.Correo;
        Telefono.value = Empleado.Telefono

      });
    })
    .catch((error) =>
      console.error("Error al obtener datos de la API:", error)
    );

  btnEditar.addEventListener("click", () => {

    const data = {
      "EmpleadoID": id,
      "Nombre":  Nombre.value,
      "Apellido": Apellido.value,
      "FechaNacimiento": FechaNacimiento.value,
      "Salario":  Salario.value,
      "Correo":  Correo.value,
      "Telefono":  Telefono.value,
      
  }


    fetch("https://localhost:44389/api/Empleado/", {
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
