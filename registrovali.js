// Función para validar el formulario de registro
function validarRegistro() {
    const form = document.getElementById('registroForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nombre = form.nombre.value;
        const email = form.email.value;
        const contrasena = form.contrasena.value;

        if (!validarNombre(nombre)) {
            alert('Por favor, ingresa un nombre válido.');
            return;
        }

        if (!validarEmail(email)) {
            alert('Por favor, ingresa un email válido.');
            return;
        }

        if (!validarContrasena(contrasena)) {
            alert('Por favor, ingresa una contraseña válida.');
            return;
        }

        // Envía el formulario si todas las validaciones son exitosas
        form.submit();
    });

    function validarNombre(nombre) {
        // Expresión regular para validar el nombre: solo letras y espacios, mínimo 2 caracteres
        const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,}$/;
        return regex.test(nombre);
    }

    function validarEmail(email) {
        // Expresión regular para validar el email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validarContrasena(contrasena) {
        // Expresión regular para validar la contraseña: al menos 8 caracteres, una letra minúscula, una letra mayúscula, un número y un carácter especial
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(contrasena);
    }
}

// Llama a la función de validación cuando el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    validarRegistro();
});
