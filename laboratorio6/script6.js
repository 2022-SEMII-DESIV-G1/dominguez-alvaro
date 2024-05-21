const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    const username = loginForm.elements['username'].value;
    const password = loginForm.elements['password'].value;

    // Simulación de inicio de sesión
    if (username === 'usuario' && password === 'contraseña') {
        // Iniciar sesión exitosa, almacenar en localStorage
        localStorage.setItem('isLoggedIn', true);
        // Redirigir a la vista de perfil
        window.location.href = 'perfil.html';
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
    }
});

// Verificar si el usuario ya tiene sesión al cargar la página
window.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('perfil.html')) {
        // Si estamos en la página de perfil, verificar si hay sesión iniciada en localStorage
        // Si no hay sesión, redirigir al inicio de sesión
        if (!localStorage.getItem('isLoggedIn')) {
            window.location.href = 'login.html';
        } else {
            // Si hay sesión, mostrar información del perfil
            mostrarPerfil();
        }
    }
});

function mostrarPerfil() {
    // Simulación de mostrar información del perfil
    const profileInfo = document.getElementById('profileInfo');
    profileInfo.innerHTML = `
        <h3>Información del Perfil</h3>
        <p><strong>Nombre:</strong> Usuario</p>
        <p><strong>Descripción:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <img src="imagen_de_perfil.jpg" alt="Imagen de perfil">
    `;
}
