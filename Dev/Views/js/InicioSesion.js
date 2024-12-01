document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Previene el envío del formulario

    // Captura los datos del formulario
    const Email = document.getElementById('Email').value;
    const Contraseña = document.getElementById('Contraseña').value;

    // Enviar los datos al servidor
    fetch("https://localhost:44389/api/Usuarios", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Email, Contraseña })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la autenticación');
        }
        return response.json();
    })
    .then(data => {
        // Aquí manejas la respuesta del servidor
        if (data.success) {
            // Redirigir al usuario a una nueva página o mostrar un mensaje de éxito
            window.location.href = '../indexP.html'; // Cambia esto a la URL que desees
        } else {
            alert(data.message); // Mostrar mensaje de error
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error en el inicio de sesión. Por favor, intenta de nuevo.');
    });
});