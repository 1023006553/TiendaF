
    /*document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        // Obtener los valores de los campos del formulario
        const Correo = document.getElementById('loginEmail').value; // Cambiado para que coincida con el body del fetch
        const Contraseña = document.getElementById('loginPassword').value; // Cambiado para que coincida con el body del fetch

        // Realizar la solicitud a la API
        fetch("https://localhost:44389/api/InicioSesion", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: Correo,
                password: Contraseña
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la autenticación');
            }
            return response.json();
        })
        .then(data => {
            // Aquí puedes manejar lo que sucede cuando la autenticación es exitosa
            console.log('Inicio de sesión exitoso:', data);
            
            // Redirigir al usuario a otra página, por ejemplo, el panel de control
            window.location.href = "/Dev/Views/indexP.html"; // Cambia esto a la URL que desees
            
        })
        .catch(error => {
            // Manejo de errores, muestra un mensaje de error al usuario
            console.error('Error:', error);
            alert('Error al iniciar sesión: ' + error.message);
        });
    });*/
    document.addEventListener("DOMContentLoaded", () => {
        const registrar = document.getElementById("registrar");

        registrar.addEventListener("click", (e) => {
            e.preventDefault();

            const Id = document.getElementById('Id').value;
            const NombreUsuario = document.getElementById('NombreUsuario').value;
            const Email = document.getElementById('Email').value;
            const Contraseña = document.getElementById('Contraseña').value;

            const termsAccepted = document.getElementById('terms').checked;
            if (!termsAccepted) {
                alert('Debes aceptar los términos y condiciones.');
                return;
            }

            const data = {
                Id: Id,
                NombreUsuario: NombreUsuario,
                Email: Email,
                Contraseña: Contraseña,
            };

            fetch("https://localhost:44389/api/Usuarios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then((response) => {
                if (response.ok) {
                    console.log("Datos enviados correctamente");
                    window.location.href = "/Dev/Views/indexP.html";
                } else {
                    console.error("Error al enviar la solicitud:", response.status);
                }
            })
            .catch((error) => {
                console.error("Error al enviar la solicitud:", error);
            });
        });
    });

    
    
    document.addEventListener('DOMContentLoaded', () => {
        const togglePassword = document.getElementById('togglePassword');
        const passwordInput = document.getElementById('contraseña');
    
        togglePassword.addEventListener('click', () => {
            // Alternar el tipo de input entre 'password' y 'text'
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Alternar el icono entre ojo abierto y cerrado
            togglePassword.innerHTML = type === 'password' ? '<i class="fa-solid fa-eye"></i>' : '<i class="fa-solid fa-eye-slash"></i>';
        });
    });
    
