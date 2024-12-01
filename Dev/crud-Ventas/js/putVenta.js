document.addEventListener("DOMContentLoaded", () => {
  const btnEditar = document.getElementById("editar");

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  const VentaID = document.getElementById("VentaID");
  const ProductoID = document.getElementById("ProductoID");
  const CantidadVendida = document.getElementById("CantidadVendida");
  const PrecioVenta = document.getElementById("PrecioVenta");
  const FechaVenta = document.getElementById("FechaVenta");

  fetch("https://localhost:44389/api/Ventas/" + id)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((Ven) => {
        VentaID .value = Ven.VentaID ;
        ProductoID.value = Ven.ProductoID;
        CantidadVendida.value = Ven.CantidadVendida;
        PrecioVenta.value = Ven.PrecioVenta;
        FechaVenta.value = Ven.FechaVenta.substring(0,10);

      });
    })
    .catch((error) =>
      console.error("Error al obtener datos de la API:", error)
    );

  btnEditar.addEventListener("click", () => {

    const data = {
      "VentaID":id,
      "ProductoID": ProductoID.value,
      "CantidadVendida": CantidadVendida.value,
      "PrecioVenta": PrecioVenta.value,
      "FechaVenta": FechaVenta.value,
  }


    fetch("https://localhost:44389/api/Ventas/", {
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
